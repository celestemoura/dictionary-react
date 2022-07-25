import React, { useState } from "react";
import axios from "axios";
import Photos from "./Photos";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [query, setQuery] = useState(props.defaultQuery);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001d1dc787f1d31428abfcb8e2e30356da0";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=12`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
