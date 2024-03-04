import React, { useState } from "react";

export default function Search() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="search">
      <form action="">
        <label for="city-search-field"></label>
        <input
          type="text"
          placeholder="Search for a city"
          class="search-field"
          required
        />
        <input type="submit" value="Search" class="search-button" />
      </form>
      <div className="SearchResult"></div>
    </div>
  );
}
