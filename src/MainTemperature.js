import React, { useState } from "react";

export default function MainTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFarenheit(event) {
    event.preventDefaut();
    setUnit("farenheit");
  }

  function showCelsius(event) {
    event.preventDefaut();
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
          °c |
          <a href="/" onClick={showFarenheit}>
            °f
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        {Math.round(farenheit())}
        <span className="unit">
          °f |
          <a href="/" onClick={showCelsius}>
            °c
          </a>
        </span>
      </div>
    );
  }
}
