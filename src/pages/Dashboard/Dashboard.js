import React from "react";
import "./Dashboard.css";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import ProfilePage from "../ProfilePage/ProfilePage";
import Weather from "../../components/Weather/Weather";
import WeatherSmall from "../../components/Weather/WeatherSmall"
import ClockPomodoro from "../../components/Clock-Pomodoro/ClockPomodoro";
import todoSVG from '../../assets/misc/todo-2.svg'
import notesSVG from '../../assets/misc/notes.svg'
import { Link } from "react-router-dom";
import NewsContainer from "../../components/News/NewsContainer";
import PomodoroTimer from "../../components/Clock-Pomodoro/Pomodoro/PomodoroTimer";
// import NewTodo from "../../components/toDoComponents/NewTodo"
// import TodoContainer from "../../components/toDoComponents/TodoContainer"
// import TodoFilter from "../../components/toDoComponents/TodoFilter"
//import Clock from "../../components/Clock/Clock";

function Dashboard(props) {
  return (
    <div className="dashboard">
      <div>
        <div><WeatherSmall /></div>

        <div>
          <div>
            {/* <ClockPomodoro /> */}
          </div>
          <div>
            <PomodoroTimer/>
          </div>
          <div>
            {/* <Weather /> */}
          </div>
        </div>
        <NewsContainer />
        <div className="icons-svg">
          <div className="todo-group">
            <img className='todo-svg' src={todoSVG} width="86px" />
            <p>Todo</p>
          </div>
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
