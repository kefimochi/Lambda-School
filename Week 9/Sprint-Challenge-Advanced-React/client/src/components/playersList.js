import React, { useEffect } from "react";
import axios from "axios";
import PlayerCard from "./playerCard";
import useLocalStorage from "./hooks/useLocalStorage";

function PlayersList() {
  //   constructor() {
  //     super();
  //     this.state = {
  //       players: []
  //     };
  //   }
  const [players, setPlayers] = useLocalStorage("players", []);

  //   componentDidMount() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/players", {
        method: "get"
      })
      .then(res => {
        setPlayers([...res.data]);
      })
      .catch(err => {
        console.log(err);
      });
  });

  //   render() {
  if (players.length > 0) {
    console.log("players", players);
    return (
      <div className="container">
        {players.map(player => (
          <PlayerCard data={player} />
        ))}
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
  //   }
}

export default PlayersList;
