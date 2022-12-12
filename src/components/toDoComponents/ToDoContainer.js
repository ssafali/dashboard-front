import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Grid, Box} from '@mui/material'

function ToDoContainer(props) {
    const API_URL = "http://localhost:5005";

    const [toDosList, setTodos] = useState([]);

    useEffect(() => {
        axios
            .get(`${API_URL}/todos`)
            .then((response) => {
                setTodos(response.data)
                    .catch(err => console.log(err));
            })
    }, [])

    console.log(toDosList)
    return (
        <>
            {toDosList.map((todo) => {
                return (
                    
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid item xs={2} sm={4} md={4} key={todo._id}>
                                    <Box p={2} className='cl'>
                                        <div>{todo.title}</div>
                                        <div>{todo.content}</div>
                                        <div>{todo.category}</div>
                                    </Box>
                                </Grid>
                        </Grid>
                    
                )
            })}
        </>
    );
}

export default ToDoContainer;