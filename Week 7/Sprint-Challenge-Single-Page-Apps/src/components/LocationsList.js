import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationList() {
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetch = () => {
      axios
        .get("https://rickandmortyapi.com/api/location/")
        .then(res => {
          console.log(res.data.results);
          setData(res.data.results);
          localStorage.setItem("locations", JSON.stringify(res.data.results));
        })
        .catch(err => console.log("Error message", err));
    };

    if (localStorage.getItem("locations") === null) {
      fetch();
    }
  }, []);

  return (
    <section className="character-list grid-view">
      {localStorage.getItem("locations") ? (
        JSON.parse(localStorage.getItem("locations")).map((char, i) => (
          <LocationCard info={char} key={i} />
        ))
      ) : (
        <h4 text-align="center">Loading...</h4>
      )}
    </section>
  );
}
