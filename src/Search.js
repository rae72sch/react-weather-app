import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Main from "./Main";
import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      description: response.data.weather[0].description,
      feel: response.data.main.feels_like,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "4e5a5a0ec22c540ea18c26122f95105d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="content">
        <div className="header">
          <Header data={weatherData} />
        </div>
        <div className="search pt-5 pb-4">
          <Main data={weatherData} />
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a city..."
              className="search-field"
              autoFocus="on"
              onChange={updateCity}
              required
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
