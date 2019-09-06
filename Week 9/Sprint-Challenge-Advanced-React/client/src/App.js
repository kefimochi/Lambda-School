import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PlayersList from "./components/playersList";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <PlayersList />
      </div>
    );
  }
}

export default App;
