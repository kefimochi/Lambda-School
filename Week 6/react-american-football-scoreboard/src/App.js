import React from "react";
import "./App.css";
import { render } from "react-dom";
import BottomRow from "./BottomRow";
import { useState } from "react";

function scoreboard(homeScore, awayScore) {
  return (
    <section className="scoreboard">
      <div className="topRow">
        <div className="home">
          <h2 className="home__name">Lions</h2>

          <div className="home__score">{homeScore}</div>
        </div>
        <div className="timer">00:03</div>
        <div className="away">
          <h2 className="away__name">Tigers</h2>
          <div className="away__score">{awayScore}</div>
        </div>
      </div>
      <BottomRow />
    </section>
  );
}

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  return (
    <div className="container">
      {scoreboard(homeScore, awayScore)}
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            onClick={() => setHomeScore(homeScore + 7)}
            className="homeButtons__touchdown"
          >
            Home Touchdown
          </button>
          <button
            onClick={() => setHomeScore(homeScore + 3)}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            onClick={() => setAwayScore(awayScore + 7)}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button>
          <button
            onClick={() => setAwayScore(awayScore + 3)}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
