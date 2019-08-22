import React from "react";
import "./App.css";
import Card from "./Card";
import { useState, useEffect } from "react";
import Form from "./Form";

function App() {
  const [usersArray, setUsersArray] = useState([]);
  return (
    <>
      <Form usersArray={usersArray} setUsersArray={setUsersArray} />
      {usersArray.map(user => (
        <Card user={user} />
      ))}
    </>
  );
}

export default App;
