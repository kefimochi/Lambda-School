import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Form from "./Form";

function App() {
  const [usersArray, setUsersArray] = useState([]);
  return (
    <>
      <Form usersArray={usersArray} setUsersArray={setUsersArray} />
      {
        (usersArray !== []) ?
          usersArray.map(user => console.log(user)) : false;
      }
      
      }
    </>
  );
}

export default App;
