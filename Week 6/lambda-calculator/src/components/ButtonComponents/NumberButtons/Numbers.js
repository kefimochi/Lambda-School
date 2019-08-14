import React from "react";
import { numbers } from "../../../data";
import { useState } from "react";
import NumberButton from "./NumberButton";

const Numbers = () => {
  const [numberState, setNumberState] = useState(numbers);

  return (
    <div className="numbersContainer">
      {numberState.map(num => (
        <NumberButton key={num} num={num} />
      ))}
    </div>
  );
};

export default Numbers;
