import React from "react";
import "./App.css";
import Logo from "./components/DisplayComponents/Logo";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Display from "./components/DisplayComponents/Display";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Display />
        <div className="allButtons">
          <div className="specialsNumbers">
            <Specials />
            <Numbers />
          </div>

          <Operators />
        </div>
      </div>
    </div>
  );
}

export default App;
