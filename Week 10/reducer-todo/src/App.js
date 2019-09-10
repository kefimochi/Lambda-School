import React, { useReducer } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./reducers/reducer";
import "./components/CSS/index.css";
import reducer, { toDoList } from "./reducers/reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, toDoList);

  return (
    <div className="app-container">
      <div className="app">
        <h2>Welcome to your Todo App!</h2>
        <TodoList dispatch={dispatch} data={state} />
        <TodoForm dispatch={dispatch} />
      </div>
    </div>
  );
};

export default App;
