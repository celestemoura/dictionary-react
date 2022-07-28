import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row photo-container">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4 each-img" key={index}>
                <a href={photo.url} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={props.photos.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
        <div className="photo-source-info">
          Photos provided by{" "}
          <a
            href="https://www.pexels.com/"
            target="_blank"
            rel="noreferrer"
            title="Pexels"
          >
            Pexels
          </a>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
