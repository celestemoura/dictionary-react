import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  let definitionIndex = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55"
  ];
  return (
    <div className="Meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 9) {
          return (
            <div key={index} className="definition">
              <p className="indent">
                {" "}
                {definitionIndex[index]}. {definition.definition}
              </p>
              <p>
                <em className="example"> {definition.example}</em>
              </p>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        } else {
          return (
            <div key={index} className="definition">
              <p className="larger-indent">
                {" "}
                {definitionIndex[index]}. {definition.definition}
              </p>
              <p>
                <em className="example"> {definition.example}</em>
              </p>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        }
      })}
    </div>
  );
}
