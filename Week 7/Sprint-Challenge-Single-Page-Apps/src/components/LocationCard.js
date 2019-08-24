import React from "react";

export default function LocationCard(props) {
  return (
    <div className="location-container">
      {console.log("props", props)}
      <h3>{props.info.name}</h3>
      <h5>
        {props.info.type} - {props.info.dimension}
      </h5>
      <p>Residents: {props.info.residents.length}</p>
    </div>
  );
}
