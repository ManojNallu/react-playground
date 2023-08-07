import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import './weather.css';

const Weather_App = () => {
    const [data, SetData] = useState({
        cloud_pct: 0,
        temp: 0,
        feels_like: 0,
        humidity: 0,
        min_temp: 0,
    });
    const [location, SetLocation] = useState("");
    const [cityName, setCityName] = useState("");

    const handleinput = (e: any) => {
        SetLocation(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fff63cae23msh5b9d66738e66ddbp146fd2jsne08780577083',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
            }
        }

        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= ${location}`, options)

            .then(response => response.json())
            .then(data => {
                SetData(data);
                setCityName(location);
                // console.log(data);
            })

            .catch(error => {
                console.log(error);
            });
    };

    // console.log(location);


    return (
        <form >
            <input type="text" onChange={handleinput} id="myInput" placeholder="Enter City Name..." />
            <button className="search_button" onClick={handleSubmit}>Search</button>

            {cityName && ( // Display city name if available
                <h2>Weather in {cityName}</h2>
            )}

            <div>
                <p>Cloud Percentage: {data.cloud_pct}%</p>
                <p>Temperature: {data.temp}°C</p>
                <p>Feels Like: {data.feels_like}°C</p>
                <p>Humidity: {data.humidity}%</p>
                <p>Min Temperature: {data.min_temp}°C</p>
            </div>

        </form>
    )
}

export default Weather_App;
