import React from "react";
import "./Header.css";
import drizzle from "./images/drizzle-cropped.svg";

export default function Header() {
  return (
    <div>
      <div className="big-weather-emoji">
        <img src={drizzle} alt="drizzle" className="mt-4" />
      </div>
      <h1 className="mt-3 mb-4">Dublin</h1>
    </div>
  );
}
