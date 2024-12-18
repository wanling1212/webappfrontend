import React from "react";
import "./Path.css";

const Path = ({ travelMode, from_location, to_location, time, notes }) => {
  // 生成 Google 地圖網址
  const googleMapsUrl = (placeId) => `https://www.google.com/maps/place/?q=place_id:${placeId}`;

  return (
    <div className="path">
      <p className="pathTitle">{travelMode}</p>
      <p>
        <strong>From:</strong>{}
        <a href={googleMapsUrl(from_location)} target="_blank" rel="noopener noreferrer">
          {from_location}
        </a>
        <br />
        <strong>To:</strong>{}
        <a href={googleMapsUrl(to_location)} target="_blank" rel="noopener noreferrer">
          {to_location}
        </a>
      </p>
      <p>
        <strong>Travel Time:</strong> {time} mins
      </p>
      {notes && <p><strong>Notes:</strong> {notes}</p>}
    </div>
  );
};

export default Path;
