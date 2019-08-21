import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Form from "./Form";

function App() {
  const [user, setUser] = useState({ username: "", password: "" });

  return <Form user={user} setUser={setUser} />;
}

export default App;
