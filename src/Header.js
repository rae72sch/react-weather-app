import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Header.css";

export default function Header(props) {
  return (
    <div>
      <div className="big-weather-emoji">
        <WeatherIcon code={props.data.icon} alt={props.data.description} />
      </div>
    </div>
  );
}
