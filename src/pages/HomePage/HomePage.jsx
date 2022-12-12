import "./HomePage.css";
import Dashboard from "../Dashboard/Dashboard";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";


function HomePage() {
const { isLoggedIn } = useContext(AuthContext);
  
  return (
    <div className="home-page">
      {isLoggedIn &&(<Dashboard/>)}
    </div>
  );
}

export default HomePage;
