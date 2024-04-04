import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "215576bab28022db35e6e64f040e1b56";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weather-five-day pt-5 pb-5">
      <div className="row">
        <div className="col weather-forecast-day">
          <div className="day">Tues</div>
          <WeatherIcon code="09d" size={20} />
          <div className="Forecast-temperatures">
            <span className="Forecast-temp-max">19°</span>
            <span className="Forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
