import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
const axios = require("axios");

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => {
          if (!res) setData("hi");
          else setData(res.data);
        })
        .catch(err => console.log("Error message", err));
    };

    console.log(data);
    fetchData();
  }, []);

  return (
    <>
      <p>I'm a paragraph tag</p>
    </>
  );
}

export default App;
