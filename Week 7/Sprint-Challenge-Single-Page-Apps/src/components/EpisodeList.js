import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetch = () => {
      axios
        .get("https://rickandmortyapi.com/api/episode/")
        .then(res => {
          console.log(res.data.results);
          setData(res.data.results);
          localStorage.setItem("episodes", JSON.stringify(res.data.results));
        })
        .catch(err => console.log("Error message", err));
    };

    if (localStorage.getItem("episodes") === null) {
      fetch();
    }
  }, []);

  return (
    <section className="character-list grid-view">
      {localStorage.getItem("episodes") ? (
        JSON.parse(localStorage.getItem("episodes")).map((char, i) => (
          <EpisodeCard info={char} key={i} />
        ))
      ) : (
        <h4 text-align="center">Loading...</h4>
      )}
    </section>
  );
}
