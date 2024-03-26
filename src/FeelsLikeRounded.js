import React, { useState } from "react";

export default function MainTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function farenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <span>
          Feels Like: {Math.round(props.celsius)}
        </span>
        <span className="unit">°c </span>
        <span className="smallUnit">
          (
          <a href="/" onClick={showFarenheit} className="text-decoration-none fw-lighter">
            °f
          </a>
          )
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        Feels Like: {Math.round(farenheit())}
        <span className="unit">
          °f
          (
          <a
            href="/"
            onClick={showCelsius}
            className="text-decoration-none fw-lighter"
          >
            °c
          </a>
          )
        </span>
      </div>
    );
  }
}
