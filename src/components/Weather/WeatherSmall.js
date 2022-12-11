import './WeatherSmall.css'
import React, { useContext } from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

import rainSVG from '../../assets/weather/rain.svg'
import thunderSVG from '../../assets/weather/thunderstorms.svg'
import snowSVG from '../../assets/weather/snow.svg'
import fogSVG from '../../assets/weather/fog.svg'
import drizzleSVG from '../../assets/weather/drizzle.svg'
import cloudsSVG from '../../assets/weather/cloudy.svg'
import clearDaySVG from '../../assets/weather/clear-day.svg'
import { AuthContext } from '../../context/auth.context';


function Weather() {
    //Getting the location information from Location.js
    // const handleLocation = (e) => setLocation(e.target.value);

    const { user } = useContext(AuthContext);
    const userId = user._id;


    // console.log(AuthContext)
    // console.log(user)


    const [data, setData] = useState({});
    const [svg, setSvg] = useState();
    const [city, setCity] = useState();
    const [countryCode, setCountryCode] = useState();

    const API_URL = "http://localhost:5005";

    // useEffect(() => {
    //   axios.get(`${API_URL}/users/${userId}`)
    //   .then((response) => {
    //     console.log(response.data)
    //     // setCity(response.user.location.split(' ')[0])
    //     // setCountryCode(response.user.location.split(' ')[1])
    //     // console.log(city, countryCode)
    //   })
    //   .catch((error) => {
    //     // const errorDescription = error.response.data.message;
    //     // setErrorMessage(errorDescription);
    //     console.log(error)
    //   })
    // }, [userId])


    //const URL = `https://api.openweathermap.org/data/2.5/weather?q=istanbul,tr&appid=${process.env.REACT_APP_WEATHER_KEY}`

    //const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_KEY}`
    //const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}${countryCode}&appid=${process.env.REACT_APP_WEATHER_KEY}`
    //const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}`

    // useEffect(() => {
    //     axios
    //         .get(URL)
    //         .then((response) => {
    //             setData(response.data)
    //             checkCondition(response.data.weather[0].main);
    //         })

    //         .catch((err) => console.log(err));
    // }, [])

    const weatherCondition = data.weather ? data?.weather[0]?.main : "";

    const checkCondition = (weather) => {
        switch (weather) {
            case "Drizzle":
                setSvg(drizzleSVG);
                break;
            case "Rain":
                setSvg(rainSVG);
                break;
            case "Snow":
                setSvg(snowSVG);
                break;
            case "Clear":
                setSvg(clearDaySVG);
                break;
            case "Fog":
            case "Mist":
                setSvg(fogSVG);
                break;
            case "Thunderstorm":
                setSvg(thunderSVG);
                break;
            case "":
                setSvg(null);
                break;
            default:
                setSvg(cloudsSVG);
                break;
        }
    }

    return (
        <div className='weather-app'>
            <div className='weather-container'>
                <div className='weather-top'>
                    <div className='weather-location'>
                        <p className='bold'>{data.name}</p>
                    </div>
                    <div>
                        <img className="svg-icon" src={svg} alt="weather icon"></img>
                    </div>
                    <div className='weather-temp'>
                        {data.main ? <h1>{(data.main.temp - 273.15).toFixed()}°C</h1> : null}
                    </div>
                    <div className='weather-description'>
                        {data.weather ? <p>{data.weather[0].description}</p> : null}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Weather;