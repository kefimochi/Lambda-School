import React from "react";
import "./App.css";
import Card from "./Card";
import { useState, useEffect } from "react";
import FormFormik from "./FormFormik";

function App() {
  const [usersArray, setUsersArray] = useState([]);
  const memberToEdit = props => {
    console.log("props", props);
  };
  return (
    <div class="container-all">
      <FormFormik usersArray={usersArray} setUsersArray={setUsersArray} />
      {usersArray.map(user => (
        <Card user={user} memberToEdit={memberToEdit} />
      ))}
    </div>
  );
}

export default App;
