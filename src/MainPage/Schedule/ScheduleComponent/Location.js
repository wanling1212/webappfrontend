import React from "react";

const Location = ({ name, address, description, visitDuration, rating, tags }) => {
  return (
    <div className="location">
      <h3>{name}</h3>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Visit Duration:</strong> {visitDuration} mins</p>
      <p><strong>Rating:</strong> {rating} ⭐</p>
      <p><strong>Tags:</strong> {tags.join(", ")}</p>
    </div>
  );
};

export default Location;
