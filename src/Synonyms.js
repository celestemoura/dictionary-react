import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div>
        {props.synonyms.map(function (synonym, index) {
          return (
            <ul>
              <li key={index}>{synonym}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
