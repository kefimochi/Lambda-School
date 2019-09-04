import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/CSS/index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
    this.newValue = {};
  }

  updateStateMessage = e => {
    let value = e.target.value;
    if (value !== null) {
      this.newValue = { target: value, id: Date.now(), completed: false };
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.newValue]
    });
  };

  toggleCompleted = id => {
    let newArr = this.state.todos.map(element =>
      element.id === id
        ? { ...element, completed: !element.completed }
        : element
    );

    this.setState({ todos: newArr });
  };

  clearCompleted = () => {
    // some filter, create a new array w/o completed?
    // if (this.state.completed === true)
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          data={this.state.todos}
          clearCompleted={this.clearCompleted}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm
          handleSubmit={this.handleSubmit}
          updateValue={this.updateStateMessage}
        />
        {console.log("This state", this.state)}
        {console.log("inpuy", document.getElementById("todoInput"))}
      </div>
    );
  }
}

export default App;
