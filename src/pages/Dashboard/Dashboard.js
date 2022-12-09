import React from "react";
import "./Dashboard.css";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import ProfilePage from "../ProfilePage/ProfilePage";
import Weather from "../../components/Weather/Weather";
import ClockPomodoro from "../../components/Clock-Pomodoro/ClockPomodoro";
// import NewTodo from "../../components/toDoComponents/NewTodo"
// import TodoContainer from "../../components/toDoComponents/TodoContainer"
// import TodoFilter from "../../components/toDoComponents/TodoFilter"
//import Clock from "../../components/Clock/Clock";

function Dashboard(props) {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div className="dashboard">
      {isLoggedIn && (
        <div>
          <div>
            <ClockPomodoro />
            <Weather />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
