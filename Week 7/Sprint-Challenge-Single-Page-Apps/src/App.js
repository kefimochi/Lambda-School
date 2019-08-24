import React, { useState, useEffect } from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";

export default function App() {
  // var data = {
  //   character: [],
  //   location: [],
  //   episode: []
  // };
  // useEffect(() => {
  //   const fetchDataCharacter = () => {
  //     axios
  //       .get("https://rickandmortyapi.com/api/character/")
  //       .then(res => {
  //         console.log("First res", res.data.results);
  //         data.character = [...res.data.results];
  //       })
  //       .catch(err => console.log("Error message", err));
  //   };
  //   const fetchDataLocation = () => {
  //     axios
  //       .get("https://rickandmortyapi.com/api/location/")
  //       .then(res => {
  //         console.log("Second res", res.data.results);
  //       })
  //       .catch(err => console.log("Error message", err));
  //   };
  //   const fetchDataEpisode = () => {
  //     axios
  //       .get("https://rickandmortyapi.com/api/episode/")
  //       .then(res => {
  //         console.log("Third res", res.data.results);
  //       })
  //       .catch(err => console.log("Error message", err));
  //   };
  //   fetchDataCharacter();
  //   fetchDataEpisode();
  //   fetchDataLocation();
  //   {
  //     setTimeout(function() {
  //       console.log("Chacar", data);
  //     }, 1000);
  //   }
  // }, []);

  return (
    <main>
      <Header />
      <TabNav />
    </main>
  );
}
