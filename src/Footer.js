import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer text-muted mt-4 pb-2">
      <br />
      Coded by{" "}
      <a
        href="https://github.com/rae72sch"
        target="_blank"
        rel="noreferrer"
        className="text-decoration-none"
      >
        Rachel Schofield
      </a>{" "}
      and open-sourced on{" "}
      <a
        href="https://github.com/rae72sch/react-weather-app"
        target="_blank"
        rel="noreferrer"
        className="text-decoration-none"
      >
        GitHub
      </a>
    </div>
  );
}
