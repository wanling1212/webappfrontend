import React from "react";
import "./Location.css";

const Location = ({ name, address, description, visitDuration, rating, tags }) => {
return (
    <div className="location">
        <h3 className='nameTitle'>{name}</h3>
        <p><strong>Address:</strong></p>
        <p>{address}</p>
        <p><strong>Description:</strong></p>
        <p>{description}</p>
        {/* <p><strong>Visit Duration:</strong></p>
        <p>{visitDuration} mins</p> */}
        <p><strong>Rating:</strong></p>
        <p>{rating} ⭐</p>
        <p><strong>Tags:</strong></p>
        <p>{tags && tags.length > 0 ? tags.join(", ") : "No tags available"}</p>
    </div>
);
};

export default Location;
