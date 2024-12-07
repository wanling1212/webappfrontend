import React from "react";
import "./Path.css";

const Path = ({ travelMode, from, to, time, notes }) => {
  return (
    <div className="path">
      <p className='pathTitle'>{travelMode}</p>
      <p>
        <strong>From:</strong> {from} <br />
        <strong>To:</strong> {to}
      </p>
      <p>
        <strong>Travel Time:</strong> {time} mins
      </p>
      {notes && <p><strong>Notes:</strong> {notes}</p>}
    </div>
  );
};

export default Path;
