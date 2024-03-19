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
        {Math.round(props.celsius)}
        <span className="unit">
          °C |
        </span>
        <span className="smallUnit">
          <a href="/" onClick={showFarenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        {Math.round(farenheit())}
        <span className="unit">
          °F |
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  }
}
