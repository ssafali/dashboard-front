import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { ThemeContext } from "../../context/theme.context";
import { useContext } from "react";


function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav className={"navbar " + theme}>
      <Link to="/" className={({ isActive }) => isActive && "selected"}><button>Home</button></Link>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "dark 🌜" : "light 🟡"}
      </button>

      {isLoggedIn && (
        <>
          <Link to="/"><button>Login</button></Link>
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup" className={({ isActive }) => isActive && "selected"}> <button>Sign Up</button> </Link>
          <Link to="/login" className={({ isActive }) => isActive && "selected"}> <button>Login</button> </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
