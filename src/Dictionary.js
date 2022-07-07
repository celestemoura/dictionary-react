import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [query, setQuery] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${query}`);
  }

  function handleSearch(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleSearch} />
        <i
          className="fa-solid fa-magnifying-glass search-button"
          onClick={search}
        ></i>
      </form>
    </div>
  );
}
