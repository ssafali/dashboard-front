import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Grid, Box } from "@mui/material";
import { AuthContext } from "../../context/auth.context";
import TodoCard from "./TodoCard";
import NewToDo from "./NewToDo";
import './ToDoContainer.css'

function ToDoContainer(props) {
  const API_URL = "http://localhost:5005";
  const { user } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");

  const [toDosList, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/todos/${user._id}`, {headers: { Authorization: `Bearer ${storedToken}` }}).then((response) => {
      setTodos(response.data).catch((err) => console.log(err));
    });
  }, [user]);

  console.log(toDosList);
  return (
      <div className="todo-container">
        <button  className="new-todo-btn">New To do</button>
          <div className='todo-cards' container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {toDosList.map((todo) => {
              return <TodoCard title={todo.title} content={todo.content} category={todo.category}/>
                    
            })}
          </div>
      </div>
  );
}

export default ToDoContainer;
