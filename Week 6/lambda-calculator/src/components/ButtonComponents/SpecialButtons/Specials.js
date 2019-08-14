import React from "react";
import { specials } from "../../../data";
import { useState } from "react";
import SpecialButton from "./SpecialButton";

const Specials = () => {
  const [specialsState, setSpecialsState] = useState(specials);

  return (
    <div className="specialsContainer">
      {specialsState.map(special => (
        <SpecialButton key={special} special={special} />
      ))}
    </div>
  );
};

export default Specials;
