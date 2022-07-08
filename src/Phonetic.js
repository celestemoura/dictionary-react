import React from "react";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <div>
          <a
            href={props.phonetic.audio}
            target="_blank"
            title="How to pronounce this word (audio)"
            rel="noreferrer"
          >
            <i class="fa-solid fa-volume-low"></i>
          </a>
          {/* <audio controls src={props.phonetic.audio}>
            {" "}
            <i class="fa-solid fa-volume-low"></i>
          </audio> */}
        </div>
        <div>{props.phonetic.text}</div>
        <br />
      </div>
    );
  } else {
    return null;
  }
}
