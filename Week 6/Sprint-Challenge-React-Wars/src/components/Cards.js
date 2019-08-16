import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  height: 10em;
  width: 100%;
  padding: 1.5em;
  margin: 1em;
`;

const Cards = props => {
  console.log("props", props.value);
  return (
    <Card>
      <h2>{props.value.name}</h2>
      <h4>
        Gender: {props.value.gender}, birth year: {props.value.birth_year}
      </h4>
    </Card>
  );
};

export default Cards;
