import React, { useState } from "react";
import "./Dashboard.css";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import ProfilePage from "../ProfilePage/ProfilePage";
import Weather from "../../components/Weather/Weather";
import WeatherSmall from "../../components/Weather/WeatherSmall"
import Clock from "../../components/Clock-Pomodoro/Clock";
import todoSVG from '../../assets/misc/todo-2.svg'
import notesSVG from '../../assets/misc/notes.svg'
import newsSVG from '../../assets/misc/newspaper.svg'
import NewsContainer from "../../components/News/NewsContainer";

import ToDoContainer from "../../components/toDoComponents/ToDoContainer";
import Collapsible from "../../components/Collapsible/Collapsible";
import TodoCard from "../../components/toDoComponents/TodoCard";
function Dashboard(props) {
  const API_URL = "http://localhost:5005";

  const [toDoActive, setTodoActive] = useState(false);
  const [notesActive, setNotesActive] = useState(false);
  const [clockActive, setClockActive] = useState(true);
  const [newsActive, setNewsActive] = useState(false);
  const [weather, setWeather] = useState('small')

  const changeWeather = () => {
    if (weather == 'small') { setWeather('big') }
    else { setWeather('small') }
  }
  return (
    <div className="dashboard">
      <div>
        <div>
          <div>
            <Clock />
          </div>

          <div className="weather">
            <div className='weather-small' onClick={() => changeWeather()}>
              {(weather === 'small') && <WeatherSmall />}
            </div>
            <div className="weather-big"
              onClick={() => changeWeather()}>{(weather === 'big') && <Weather />}
            </div>
          </div>

        </div>
        <div className="icons-svg">
          <div className="icon-item">
            <img onClick={() => setNewsActive(!newsActive)} className="news-svg" src={newsSVG} width="66px" />
            <p>News</p>
          </div>
          <div className="icon-item">
            <img className='todo-svg' src={todoSVG} width="100px" />
            <p>To do</p>
          </div>
        </div>
        {newsActive && <div className="show-news"><NewsContainer />
        </div>}
      </div>
    </div>
  );
}

export default Dashboard;
