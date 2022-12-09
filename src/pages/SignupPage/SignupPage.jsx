import "./SignupPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Location from "../../components/Location Search/Location";

const API_URL = "http://localhost:5005";

function SignupPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [cityCode, setCityCode] = useState("")
  const [countryCode, setCountryCode] = useState("")

  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  //const handleOnSearchChange = (searchData) => console.log(searchData)
  // {console.log(`${searchData.label.split(" ")[0]} + 
  // // ${searchData.label.split(" ")[1]}`)}


  // const handleLocation = (e) => setLocation(e.target.value);
  const handleOnSearchChange = (e) => {
    console.log(e)
    console.log(e.label)

    // setCityCode(e.label.split(" ")[0])
    // setCountryCode(e.label.split(" ")[1])
    // console.log({e})
    setLocation(`${e.label.split(" ")[0]} ${e.label.split(" ")[1]}`)
    console.log(location)
  } 

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log(location)
    // Create an object representing the request body
    const requestBody = { email, password, userName, location };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios.post(`${API_URL}/auth/signup`, requestBody)
    .then((response) => {
      navigate("/login");
    })
    .catch((error) => {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    })
  };

  return (
    <div className="signup-page">
      
      <h1>Sign Up</h1>

      <form className="signup-form" onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        
        <label>Username:</label>
        <input type="text" name="name" value={userName} onChange={handleUsername} />
        
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <label>Location:</label>
        <Location value={location}  onSearchChange={handleOnSearchChange}/>
        {/* <input type="text" name="name" value={location} onChange={handleLocation} /> */}
      
        <button className="signup-button" type="submit" value="signup">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}

export default SignupPage;
