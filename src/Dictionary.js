import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [query, setQuery] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearch(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="row search-engine">
        <div className="col">
          <form onSubmit={search}>
            <input
              type="search"
              onChange={handleSearch}
              placeholder="Enter a word"
              className="search-field"
            />
            <i
              className="fa-solid fa-magnifying-glass search-button"
              onClick={search}
            ></i>
          </form>
        </div>
      </div>
      <Results results={results} />
    </div>
  );
}
