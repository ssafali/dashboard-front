import React from "react";

import Dropdown from "react-dropdown";
import "./TodoCard.css";
import deleteBtn from "../../assets/misc/delete-circle.svg";
import editBtn from "../../assets/misc/edit.svg";
import checkboxBtn from "../../assets/misc/checkbox.svg";

function TodoCard(props) {
  const options = ["general", "work", "home", "hobbies"];
  const defaultOption = options[0];
  return (
    <div className="new-form">
      <form onSubmit={props.handleSubmit}>
        <div className="form">
          <div className="title-btn">
            <input
              autocomplete="off"
              className="new-title"
              placeholder="Title"
              onChange={props.handleTitle}
              value={props.title}
              name="title"
            />
          </div>

          <div className="new-content">
            <textarea
              autocomplete="off"
              className="new-content"
              placeholder="New to do"
              onChange={props.handleContent}
              value={props.content}
              name="content"
            ></textarea>
            <div>
              <input className="add-line" placeholder="enter"></input>
              <div className="buttons">
                <img src={editBtn} className="edit-btn"></img>
                {/* <img src={checkboxBtn} className='completed-btn'></img> */}
                <img src={deleteBtn} className="delete-btn"></img>
              </div>
            </div>
          </div>

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
          <button className="add-button" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoCard;
