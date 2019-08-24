import React from "react";

export default function EpisodeCard(props) {
  return (
    <div className="episode-container">
      {console.log("props", props)}
      <h3>
        {props.info.name} - {props.info.episode}
      </h3>
      <h5>Air data: {props.info.air_date}</h5>
      {/* <h3>{props.info.name}</h3>
      <h5>
        {props.info.type} - {props.info.dimension}
      </h5>
      <p>Residents: {props.info.residents.length}</p> */}
    </div>
  );
}
