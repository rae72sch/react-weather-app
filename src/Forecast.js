import React from "react";

export default function Forecast() {
  return (
    <div className="weather-five-day">
      <div className="weather-forecast-day">
        <h5>Sat</h5>
        <span className="icon">🌤️</span>
        <p className="temp-range">10° / 8°</p>
      </div>
      <div className="weather-forecast-day">
        <h5>Sun</h5>
        <span className="icon">🌧️</span>
        <p className="temp-range">11° / 8°</p>
      </div>
      <div className="weather-forecast-day">
        <h5>Mon</h5>
        <span className="icon">🌧️</span>
        <p className="temp-range">10° / 7°</p>
      </div>
      <div className="weather-forecast-day">
        <h5>Tues</h5>
        <span className="icon">🌤️</span>
        <p className="temp-range">10° / 7°</p>
      </div>
      <div className="weather-forecast-day">
        <h5>Wed</h5>
        <span className="icon">🌤️</span>
        <p className="temp-range">10° / 6°</p>
      </div>
    </div>
  );
}
