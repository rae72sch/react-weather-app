import React from "react";
import FeelsLikeRounded from "./FeelsLikeRounded";
import MainTemperature from "./MainTemperature";
import DayTime from "./DayTime";

import "./Main.css";

export default function Main(props) {
    return (
      <div className="main">
        <div className="city">
          <h1 className="mt-3 mb-4">{props.data.city}</h1>
        </div>
        <div className="current">
          <div className="left-column text-capitalize">
            {props.data.description}
            <br />
            <FeelsLikeRounded celsius={props.data.feel} />
          </div>
          <div className="middle-column">
            <span className="main-temp"><MainTemperature celsius={props.data.temperature} /></span>
            <div className="day-time">
              <DayTime date={props.data.date} />
            </div>
          </div>
          <div class="right-column">
            Humidity: {props.data.humidity}%
            <br />
            Wind speed: {props.data.wind}mph
          </div>
        </div>
      </div>
    );
  // }
}
