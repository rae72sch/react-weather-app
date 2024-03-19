import React from "react";
import "./Header.css";
import WeatherIcon from "./WeatherIcon";

export default function Header(props) {
  return (
    <div>
      <div className="big-weather-emoji">
        <WeatherIcon code={props.data.icon} />
      </div>
    </div>
  );
}
