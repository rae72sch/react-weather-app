import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function Forecast() {
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
