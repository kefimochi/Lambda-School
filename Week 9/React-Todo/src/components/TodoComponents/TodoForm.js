import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form onSubmit={this.props.submit}>
        <input
          type="text"
          name="todo"
          id="todoInput"
          placeholder="change state"
          onChange={this.props.updateValue}
        />
        <button
          onClick={(document.getElementById("todoInput").value = "")}
          type="submit"
        >
          Add to the list
        </button>

        <button type="button">Clear completed</button>
      </form>
    );
  }
}

// onclick={(document.getElementById("todoInput").value = "")}

export default TodoForm;
