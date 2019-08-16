import React from "react";
import "./App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
const axios = require("axios");

const Img = styled.img`
  width: 100%;
  height: auto;
  border: 3px solid white;
`;

const Container = styled.div`
  height: auto;
  width: 80vh;
  padding: 5em;
`;

const CoolBackground = styled.div`
  height: auto;
  width: 100%;
  background-image: linear-gradient(
    to right top,
    #845ec2,
    #d65db1,
    #ff6f91,
    #ff9671,
    #ffc75f,
    #f9f871
  );
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [data, setData] = useState("Data");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => {
          console.log(res.data);
          setData(res.data);
        })
        .catch(err => console.log("Error message", err));
    };

    fetchData();
  }, []);

  return (
    <CoolBackground>
      <Container>
        <Img src={data.url} />
        <h1>{data.title}</h1>
        <p>{data.explanation}</p>
        <h4>Image taken on {data.date}</h4>
      </Container>
    </CoolBackground>
  );
}

export default App;
