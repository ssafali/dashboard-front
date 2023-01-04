import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import PomodoroTimer from "./components/Clock-Pomodoro/Pomodoro/PomodoroTimer";

import NoteCard  from './components/Notes/NoteCard'
import NewNote  from './components/Notes/NewNote'
import NotesContainer  from './components/Notes/NotesContainer'


function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<HomePage /> } />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/pomodoro"
          element={
            <IsPrivate>
              <PomodoroTimer/>
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />

        {/* <Route
          path='/notes'
          element={
            <IsPrivate>
              <NotesContainer/>
         
            </IsPrivate>
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
