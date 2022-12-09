import "./HomePage.css";
import LoginPage from "../LoginPage/LoginPage"
import SignupPage from "../SignupPage/SignupPage"
import ClockPomodoro from "../../components/Clock-Pomodoro/ClockPomodoro";
import todoSVG from '../../assets/misc/todo-2.svg'
import notesSVG from '../../assets/misc/notes.svg'
import Weather from "../../components/Weather/Weather";

function HomePage() {
  
  return (
    <div className="home-page">
      <div>
          <ClockPomodoro/>
      </div>
      <div>
        <Weather/>
      </div>

      <div className="icons-svg">
          <img className='todo-svg' src={todoSVG} width="64px"/>
          <img className='notes-svg'src={notesSVG} width="32px"/>
      </div>

    </div>
  );
}

export default HomePage;
