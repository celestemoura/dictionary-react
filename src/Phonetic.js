import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic phonetic-block">
        <div>
          {/* <a
            href={props.phonetic.audio}
            target="_blank"
            title="How to pronounce this word (audio)"
            rel="noreferrer"
          >
            <i className="fa-solid fa-volume-low"></i>
          </a> */}
          <audio controls src={props.phonetic.audio}>
            {" "}
            <i className="fa-solid fa-volume-low"></i>
          </audio>
        </div>
        <div>{props.phonetic.text}</div>
      </div>
    );
  } else {
    return null;
  }
}