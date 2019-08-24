import React from "react";

export default function CharacterCard(props) {
  return (
    <div className="char-container">
      <img src={props.info.image} />
      <h3>{props.info.name}</h3>
      <h5>
        {props.info.species} - {props.info.status}
      </h5>
      <p>Location: {props.info.location.name}</p>
      <p>Origin: {props.info.origin.name}</p>
    </div>
  );
}
