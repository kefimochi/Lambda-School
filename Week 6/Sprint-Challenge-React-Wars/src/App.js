import React from "react";
import "./App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";
const axios = require("axios");

const Container = styled.div`
  width: 50%;
  height: auto;
`;

const App = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://swapi.co/api/people/")
        .then(res => {
          setState(res.data.results);
        })
        .catch(err => console.log("Error message", err));
    };

    fetchData();
  }, []);

  state.map(value => console.log(value));

  return (
    <>
      <h1 className="Header">React Wars</h1>
      <div className="App">
        <Container>
          {state.map(value => {
            return <Cards value={value} />;
          })}
        </Container>
      </div>
    </>
  );
};

export default App;
