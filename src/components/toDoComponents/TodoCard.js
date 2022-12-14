import React, { useState } from "react";

import Dropdown from "react-dropdown";
import "./TodoCard.css";
import removeBtn from "../../assets/misc/remove.png";
import editBtn from "../../assets/misc/edit.svg";
import checkboxBtn from "../../assets/misc/checked.png";

function TodoCard(props) {
  const [filter, setFilter] = useState('all')

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleFiltering = (e) => {
    const id = e.target.id;
    setFilter(id)
    
    console.log('clicked')
}
  return (
    <div className="todo-container">
      <div className='todo-filters'>
        <p className={filter === "all" ? 'active' :''} onClick={handleFiltering} id='all'>All</p>
        <p className={filter === "active" ? 'active' :''} onClick={handleFiltering} id='active'>Active</p>
        <p className={filter === "completed" ? 'active' :''} onClick={handleFiltering} id='completed'>Completed</p>
      </div>
       <div className="todo-content">
       <ul className="content-list">
            {props.toDosList.map(todo => (
              <li className="todo-element" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                
                {todo.completed ? <del>{todo.content}</del> : todo.content }
                {/* {isHovering && 
                  (<img className='remove-btn' src={removeBtn} alt='remove button' height='20px'/>)} */}
               <input type={'checkbox'}
                        checked={todo.completed}
                        onClick={() => {props.handleCompleted(todo)}}
                        onChange={() => {console.log("changed", todo)}}
                        className="checkbox-rounded">
                </input>
               <input type={'checkbox'}
                        checked={todo.completed}
                        onClick={() => {props.handleDeleted(todo)}}
                        onChange={() => {console.log("deleted", todo)}}
                        className="checkbox-rounded-delete"
                        id='delete-check'>
                </input> <label className='checker' for='delete-check'></label>
              </li>
            ))}
          </ul>
       </div>
       <form onSubmit={props.handleSubmit}>
       <input className="todo-input" placeholder="New to do"
                    value={props.content}
                    onChange={props.handleContent}
            />
       </form>
    </div>
  );
}

export default TodoCard;


{/* <div className="form">
<div className="title-btn">
  <div className="filter" onChange={props.handleTitle}/>
</div>
<div className="new-content all-todos">
  <div>
  <form onSubmit={props.handleSubmit}>
    <input className="add-line" placeholder="Add new"></input>
    <div className="buttons">
      <img src={editBtn} className="edit-btn"></img> */}
      {/*----------------- <img src={checkboxBtn} className='completed-btn'></img> */}
      {/* <img src={deleteBtn} className="delete-btn"></img>
    </div>
  </div>
</div> */}

{/* <Dropdown 
              autocomplete="off" 
              controlClassName='dropdown-control' 
              menuClassName='dropdown' 
              placeholderClassName='dropdown-placeholder'
              options={options} 
              value={defaultOption} 
              onChange={props.handleCategory} 
              placeholder="Select a category" 
              /> */}
{/* <button className="add-button" type="submit">
  Add
</button>
</div>
</form> */}