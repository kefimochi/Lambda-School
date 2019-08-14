import React from "react";
import { operators } from "../../../data";
import { useState } from "react";
import OperatorButton from "./OperatorButton";

const Operators = () => {
  const [operatorsState, setOperatorsState] = useState(operators);

  return (
    <div className="operatorsContainer">
      {operatorsState.map(operator => (
        <OperatorButton key={operator.char} operator={operator.char} />
      ))}
    </div>
  );
};

export default Operators;
