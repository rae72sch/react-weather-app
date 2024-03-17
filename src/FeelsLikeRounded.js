import React from "react";

export default function FeelsLikeRounded(props) {
  return (
    <div className="FeelsLike">
      Feels like: {Math.round(props.celsius)}
      <span className="unit">°c</span>
    </div>
  );
}
