import React from "react";

const Path = ({ travelMode, from, to, time, notes }) => {
  return (
    <div className="path">
      <p>
        <strong>Travel Mode:</strong> {travelMode}
      </p>
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
