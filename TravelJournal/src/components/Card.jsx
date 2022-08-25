
import React from "react";
import PathImage from "../images/pathMarker.png";

export default function cards(props) {
  return (
    <div key={props.items.key} className="card-body">
      <img src={props.items.imageUrl} className="card-img" />
      <div className="card-info">
        <div className="card-location">
          <span className="loc-name">
            <span className="location">
              <img src={PathImage} className="path-img" />
              {props.items.location.toUpperCase()}
            </span>
            <a
              className="card-link"
              href={props.items.googleMapsUrl}
              target="_blank"
            >
              View on Google Maps
            </a>
          </span>
        </div>
        <h1>{props.items.title}</h1>
        <div className="date">
          <span>
            {props.items.startDate} - {props.items.endDate}
          </span>
        </div>
        <p className="description">{props.items.description}</p>
      </div>
    </div>
  );
}
