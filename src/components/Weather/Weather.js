import './Weather.css'
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
    
    const {user} = useContext(AuthContext);
    const _id = user._id;

    const [data, setData] = useState({});
    const [svg, setSvg] = useState();
    const [city, setCity] = useState();
    const [countryCode, setCountryCode] = useState();
    
    const API_URL = "http://localhost:5005";

    useEffect(() => {
      axios.get(`${API_URL}/users/${_id}`)
      .then((response) => {
        console.log(response.data.user)
        setCity(response.data.user.location.split(' ')[0])
        setCountryCode(response.data.user.location.split(' ')[1])
      })
      .catch((error) => {
        console.log(error)
      })
    }, [_id])
    
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}${countryCode}&appid=${process.env.REACT_APP_WEATHER_KEY}`
    
    useEffect(() => {
        axios
            .get(URL)
            .then((response) => {setData(response.data)
            checkCondition(response.data.weather[0].main);
            })
            .catch((err) => console.log(err));
    }, [])

    // const weatherCondition = data.weather ? data?.weather[0]?.main : "";

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
  }}



    return (
        <div className='weatherApp'>
            <div className='weatherContainer'>
                <div className='weatherTop'>
                    <div className='weatherLocation'>
                        <p className='bold'>{data.name}</p>
                    </div>
                    <div className='weatherTemp'>
                        {data.main ? <h1>{(data.main.temp - 273.15).toFixed()}°C</h1> : null}
                    </div>
                    <div className='weatherDescription'>
                        {data.weather ? <p>{data.weather[0].description}</p> : null}
                    </div>
                    <div>
                        <img className="svgIcon" src={svg} alt="weather icon"/>
                    </div>
                </div>
                <div className='weatherBottom'>
                    <div className='feels'>
                        {data.main ? <p>{(data.main.feels_like - 273.15).toFixed()}°C</p> : null}
                        <p className='bold'>Feels Like</p>
                    </div>
                    <div className='humidity'>
                        {data.main ? <p>{data.main.humidity}</p> : null}
                        <p className='bold'>Humidity</p>
                    </div>
                    <div className='windSpeed'>
                        {data.wind ? <p>{data.wind.speed}</p> : null}
                        <p className='bold'>Wind Speed</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Weather;