import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Grid, Box } from "@mui/material";
import { AuthContext } from "../../context/auth.context";
import TodoCard from "./TodoCard";
import './ToDoContainer.css'

function ToDoContainer() {
  const API_URL = "http://localhost:5005";
  const { user } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");
  const [toDosList, setTodos] = useState([]);
  const [content, setContent] = useState('');
  const [completed, setCompleted] = useState(false)

const handleContent = (e) => {
    setContent(e.target.value);
}

const handleCompleted = (todo) => {
  const requestBody = {id: todo._id, completed:!todo.completed}
  axios.post(`${API_URL}/todos/edit`, requestBody,  {headers: { Authorization: `Bearer ${storedToken}` }})
  .then(() => {
    const newTodos = toDosList.map(t => {
      if(t._id === todo._id) {
        t.completed = !t.completed;
      }
      return t;
    })
    setTodos([[...newTodos]])
  })

}

const handleSubmit = (e) => {
  e.preventDefault();
  const requestBody = { content, user:user._id };
  
  console.log(user)
  axios.post(`${API_URL}/todos/new`, requestBody,  {headers: { Authorization: `Bearer ${storedToken}` }})
      .then((response) => {
        setTodos([...toDosList, response.data]);
      })
      .catch((error) => {
          const errorDescription = error.response.data.message;
          console.log(errorDescription)
      })
}

  // Get all todos of the user
  useEffect(() => {
    axios.get(`${API_URL}/todos/${user._id}`, {headers: { Authorization: `Bearer ${storedToken}` }})
    .then((response) => {
      setTodos(response.data)
    });
  }, [user]);

  console.log(toDosList);
  return (
      <div className="todo-container">
          {/* <div className='todo-cards' container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {toDosList.map((todo) => {
              //return <TodoCard title={todo.title} content={todo.content} category={todo.category}/>
              return <div>{todo.content} </div>
            })}
          </div> */}
          <form onSubmit={handleSubmit}>
            <input placeholder="New to do"
                    value={content}
                    onChange={handleContent}
            />
          </form>
          <ul>
            {toDosList.map(todo => (
              <li>
                <input type={'checkbox'}
                        checked={todo.completed}
                        onClick={(e) => {handleCompleted(todo); handleContent(e)}}
                />
                {todo.completed ? <del>{todo.content}</del> : todo.content}
              </li>
            ))}
          </ul>
      </div>
  );
}

export default ToDoContainer;
