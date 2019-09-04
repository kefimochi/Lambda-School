import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/CSS/index.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
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
      console.log(this.newValue);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.newValue]
    });
  };

  // Expects an object
  toggleCompleted = id => {
    console.log("IT WORKS!!", id);

    let newArr = this.state.todos.map(element =>
      element.id === id
        ? { ...element, completed: !element.completed }
        : element
    );

    this.setState({ todos: newArr });
    return "This is an id we're looking for: " + id;
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
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm
          submit={this.handleSubmit}
          updateValue={this.updateStateMessage}
          clearCompleted={this.clearCompleted}
        />
        {console.log("This state", this.state)}
        {console.log("inpuy", document.getElementById("todoInput"))}
      </div>
    );
  }
}

export default App;
