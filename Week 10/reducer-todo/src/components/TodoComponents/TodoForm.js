import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form
        onSubmit={e => {
          {
            document.getElementById("todoInput").value = "";
            return this.props.handleSubmit(e);
          }
        }}
      >
        <input
          type="text"
          name="todo"
          id="todoInput"
          placeholder="change state"
          onChange={this.props.updateValue}
        />
        <button type="submit">Add to the list</button>

        <button onClick={this.props.clearCompleted} type="button">
          Clear completed
        </button>
      </form>
    );
  }
}

export default TodoForm;
