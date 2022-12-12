import React, { useState } from "react";
import "./Dashboard.css";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import ProfilePage from "../ProfilePage/ProfilePage";
import Weather from "../../components/Weather/Weather";
import WeatherSmall from "../../components/Weather/WeatherSmall"
import ClockPomodoro from "../../components/Clock-Pomodoro/ClockPomodoro";
import todoSVG from '../../assets/misc/todo-2.svg'
import notesSVG from '../../assets/misc/notes.svg'
import NewsContainer from "../../components/News/NewsContainer";
import rain from '../../assets/weather/rain.svg'

import ToDoContainer from "../../components/toDoComponents/ToDoContainer";
import Collapsible from "../../components/Collapsible/Collapsible";
import NewToDo from "../../components/toDoComponents/NewToDo";
import TodoCard from "../../components/toDoComponents/TodoCard";
function Dashboard(props) {
const API_URL = "http://localhost:5005";

const [toDoActive, setTodoActive] = useState(false);
const [notesActive, setNotesActive] = useState(false);
const [clockActive, setClockActive] = useState(true);
const [journalActive, setJournalActive] = useState(false)

  return (
    <div className="dashboard">
      <div>
        <div>
          <div>
              {/* <ClockPomodoro /> */}
          </div>
          {/* <WeatherSmall/> */}

          <div>
            <ToDoContainer/>
            {/* <Collapsible label={<Weather/>}> 
              <WeatherSmall/>
            </Collapsible> */}
            {/* <Collapsible>
              <Weather/>
            </Collapsible> */}
          </div>
          <div>
            {/* <NewToDo/> */}
          </div>
        </div>
        {/* <NewsContainer /> */}

        <div className="icons-svg">
          <Collapsible label={<ToDoContainer/>}>
            <div className="todo-group">
              <img className='todo-svg' src={todoSVG} width="86px" />
              <p>To do</p>
            </div>
          </Collapsible>
            {/* <TodoCard/> */}
          <div className="notes-group">
            <img className='notes-svg' src={notesSVG} width="50px" />
            <p>Notes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
