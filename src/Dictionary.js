import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [query, setQuery] = useState(props.defaultQuery);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
      setResults(response.data[0]);
  }

  function search() {
    //https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
    if (query === null) {
      alert("no");
    } else {
      axios.get(apiUrl).then(handleResponse);
    }
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearch(event) {
    setQuery(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="row search-engine">
          <div className="col-lg-11">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={handleSearch}
                placeholder="Search for a Word"
              />
            </form>
          </div>
          <div className="col-lg-1">
            <i
              className="fa-solid fa-magnifying-glass search-button"
              onClick={handleSubmit}
            ></i>
          </div>
        </div>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
