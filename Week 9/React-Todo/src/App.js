import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

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
      // this.setState([{ target: value, id: Date.now(), completed: false }]);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.newValue]
    });
  };

  clearCompleted = () => {
    // some filter, create a new array w/o completed?
    // if (this.state.completed === true)
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList data={this.state.todos} />
        <TodoForm
          submit={this.handleSubmit}
          updateValue={this.updateStateMessage}
          clearCompleted={this.clearCompleted}
        />
        {console.log("This sate", this.state)}
      </div>
    );
  }
}

export default App;
