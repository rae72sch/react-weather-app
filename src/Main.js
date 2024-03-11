import React from "react";
import "./Main.css";
import Search from "./Search";

export default function Main() {
  return (
    <div className="main">
      <div className="city">
        <h1 className="mt-3 mb-4"> {city} </h1>
      </div>
      <div className="current">
        <div className="left-column">
          Partly cloudy
          <br />
          Feels like 12&deg;
        </div>
        <div className="middle-column">
          <span className="main-temp">6&deg;c</span>
          <div className="day-time">Friday 10:20</div>
        </div>
        <div class="right-column">
          Humidity: 84%
          <br />
          Wind speed: 8mph
        </div>
      </div>
    </div>
  );
}
