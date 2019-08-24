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
        })
        .catch(err => console.log("Error message", err));
    };

    fetch();
  }, []);

  return (
    <section className="character-list grid-view">
      {data.map((episode, i) => (
        <EpisodeCard info={episode} key={i} />
      ))}
    </section>
  );
}
