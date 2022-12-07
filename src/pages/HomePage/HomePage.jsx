import "./HomePage.css";
import { useContext } from "react"
import Navbar from "../../components/Navbar/Navbar";
import { ThemeContext } from "../../context/theme.context";

function HomePage() {
  const { theme } = useContext(ThemeContext)
  
  return (
    <div className={"dashboard " + theme}>
        <Navbar />
      <h1>Home page</h1>
    </div>
  );
}

export default HomePage;
