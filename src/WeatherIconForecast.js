import React from "react";

import sunny from "./images/sunny.svg";
import moonStar from "./images/moonStar.svg";
import clearCloudy from "./images/clearCloudy.svg";
import clearCloudyNight from "./images/clearCloudyNight.svg";
import partlyCloudy from "./images/partlyCloudy.svg";
import partlyCloudyNight from "./images/partlyCloudyNight.svg";
import cloudy from "./images/cloudy.svg";
import showers from "./images/showers.svg";
import showersNight from "./images/showersNight.svg";
import rain from "./images/rain.svg";
import thunderstorms from "./images/thunderstorms.svg";
import snow from "./images/snow.svg";
import foggy from "./images/foggy.svg";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": sunny,
    "01n": moonStar,
    "02d": clearCloudy,
    "02n": clearCloudyNight,
    "03d": partlyCloudy,
    "03n": partlyCloudyNight,
    "04d": cloudy,
    "04n": cloudy,
    "09d": showers,
    "09n": showersNight,
    "10d": rain,
    "10n": rain,
    "11d": thunderstorms,
    "11n": thunderstorms,
    "13d": snow,
    "13n": snow,
    "50d": foggy,
    "50n": foggy,
  };

  return (
    <img
      className="icon"
      src={codeMapping[props.code]}
      size={props.size}
      alt={props.alt}
    />
  );
}
