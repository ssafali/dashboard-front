import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (   
    <header className="header">
      <nav className="navbar">
      <Link  to="/" className="headerHome" id="navHome"><button>Home</button></Link>

        {isLoggedIn && (
          <>
            <Link to="/" className={({ isActive }) => isActive && "selected"}><button>Login</button></Link>
            <button onClick={logOutUser}>Logout</button>
            <span>{user && user.name}</span>
          </>
        )}
        <div>
          {!isLoggedIn && (
            <>
              <Link to="/signup" className={({ isActive }) => isActive && "selected"}> <button>Sign Up</button> </Link>
              <Link to="/login" className={({ isActive }) => isActive && "selected"}> <button>Login</button> </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
