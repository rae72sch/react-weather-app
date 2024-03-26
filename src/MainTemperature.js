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
        {Math.round(props.celsius)}°
        <span className="unit fs-1">
          C 
          {" "}
        </span>
        <span className="smallUnit fs-3">
          (
          <a href="/" onClick={showFarenheit} className="text-decoration-none">
            °F
          </a>
          )
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        {Math.round(farenheit())}°
        <span className="unit fs-1">
          F
          {" "}
        </span>
        <span className="smallUnit fs-3">
          (
          <a href="/" onClick={showCelsius} className="text-decoration-none">
            °C
          </a>
          )
        </span>
      </div>
    );
  }
}
