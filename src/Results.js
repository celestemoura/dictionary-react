import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1>
          <span className="pre-headline">definitions of </span>
          <br />
          {props.results.word}
        </h1>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <span key={index}>
              <Phonetic phonetic={phonetic} />
            </span>
          );
        })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
