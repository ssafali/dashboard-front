import axios from 'axios';
import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './NewToDo.css'

function NewToDo(props) {
    const API_URL = "http://localhost:5005";

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('general');
    const [newTodo, setNew] = useState('');

    const [errorMessage, setErrorMessage] = useState(undefined);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleContent = (e) => {
        setContent(e.target.value);
    }
    const handleCategory = (e) => {
        setCategory(e.value);
    }
    const handleNew = (e) => {
        setNew({title, content, category});
    }
    const handleAddedCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = { title, content, category };

        axios.post(`${API_URL}/todos/new`, requestBody)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
    }
    const options = [
        'general', 'work', 'home', "hobbies"
      ];
      const defaultOption = options[0];

    return (
        <div className="new-form">
            <form onSubmit={handleSubmit}>
                <div className='form'>
                    <input autocomplete="off" className='new-title' placeholder='Title' onChange={handleTitle} value={title} name='title' />
                    <textarea autocomplete="off" className='new-content' placeholder='New to do' onChange={handleContent} value={content} name='content' />
                    {/* <Dropdown autocomplete="off" className='' options={options} value={defaultOption} onChange={handleCategory} placeholder="Select a category" /> */}
                    {/* <button className="add-button" type="submit">Add</button> */}
                </div>
            </form>

        </div>
    );
}

export default NewToDo;