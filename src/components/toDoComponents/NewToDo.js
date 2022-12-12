import axios from 'axios';
import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './NewToDo.css'
import {AuthContext} from '../../context/auth.context'
import {useEffect, useContext } from 'react';
import TodoCard from './TodoCard';

function NewToDo(props) {
    const API_URL = "http://localhost:5005";
    const {user} = useContext(AuthContext)
    
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = { title, content, category, user:user._id };
        console.log(user)
        axios.post(`${API_URL}/todos/new`, requestBody)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
    }

    return (
        <div className="new-form">
            <TodoCard title={title} content={content} category={category}
            handleTitle={handleTitle} handleContent={handleContent} handleCategory={handleCategory} handleSubmit={handleSubmit} 
            />
        </div>
    );
}

export default NewToDo;