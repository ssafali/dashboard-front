import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <header>
      <div >
        <p className="headerHome">Navbar</p>
      </div>

      <nav className="navbar">
        <ul>
            {isLoggedIn && (
              <li className="navLi">
                <Link to="/" className={({ isActive }) => isActive && "selected"}><button className="navButton">Login</button></Link>
                <button onClick={logOutUser} className="navButton">Logout</button>
                <button  className="navButton">Settings</button>

                <span>{user && user.name}Here's a span tag of the user name.</span>
              </li>
            )}
         
            {!isLoggedIn && (
              <li className="navLi">
                <Link to="/" className={({ isActive }) => isActive && "selected"}> <button className="navButton">Home</button> </Link>
                <Link to="/signup" className={({ isActive }) => isActive && "selected"}> <button className="navButton">Sign Up</button> </Link>
                <Link to="/login" className={({ isActive }) => isActive && "selected"}> <button className="navButton">Login</button> </Link>
              </li>
            )}
          
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
