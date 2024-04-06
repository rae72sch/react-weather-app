import React from "react";
import WeatherIcon from "./WeatherIconForecast";

import "./ForecastDay.css";

export default function ForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="five-day">
      <div className="day fw-bold">{day()}</div>
      <div className="weather-icon mt-4 mb-4">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="Forecast-temperatures">
        <span className="Forecast-temp-max fw-bold me-2">{maxTemp()}</span>
        <span className="Forecast-temp-min fw-light">{minTemp()}</span>
      </div>
    </div>
  );
}
