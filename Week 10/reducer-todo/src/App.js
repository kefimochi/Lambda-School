import React, { useReducer } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./reducers/reducer";
import "./components/CSS/index.css";
import reducer, { toDoList } from "./reducers/reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, toDoList);
  let newValue = {};

  const updateStateMessage = e => {
    let value = e.target.value;
    if (value !== null) {
      newValue = { item: value, id: Date.now(), completed: false };
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // this.setState({
    //   todos: [...this.state.todos, this.newValue]
    // });
    // DISPATCH ADD -------
    dispatch({ type: "MODIFY", newArr: [...state, newValue] });
  };

  const toggleCompleted = id => {
    let newArr = state.map(element =>
      element.id === id
        ? { ...element, completed: !element.completed }
        : element
    );

    dispatch({ type: "MODIFY", newArr: newArr });
  };

  const clearCompleted = () => {
    let newArr = state.filter(element => element.completed === false);

    dispatch({ type: "MODIFY", newArr: newArr });
  };

  return (
    <div className="app-container">
      <div className="app">
        <h2>Welcome to your Todo App!</h2>
        <TodoList data={state} toggleCompleted={toggleCompleted} />
        <TodoForm
          handleSubmit={handleSubmit}
          updateValue={updateStateMessage}
          clearCompleted={clearCompleted}
        />
        {console.log("This state", state)}
        {console.log("inpuy", document.getElementById("todoInput"))}
      </div>
    </div>
  );
};

export default App;
