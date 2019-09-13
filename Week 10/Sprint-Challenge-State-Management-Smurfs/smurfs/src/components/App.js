import React, { Component } from "react";
import SmurfsList from "./smurfsList";
import SmurfForm from "./smurfForm";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
        <SmurfsList />
      </div>
    );
  }
}

export default App;
