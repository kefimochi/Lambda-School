import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.newValue = {};
  }

  updateStateMessage = e => {
    let value = e.target.value;
    if (value !== null) {
      this.newValue = { item: value, completed: false, id: Date.now() };
    }
  };

  render() {
    return (
      <form
        onSubmit={e => {
          {
            document.getElementById("todoInput").value = "";
            e.preventDefault();
            return this.props.dispatch({
              type: "HANDLE-SUBMIT",
              newValue: this.newValue
            });
          }
        }}
      >
        <input
          type="text"
          name="todo"
          id="todoInput"
          placeholder="change state"
          onChange={this.updateStateMessage}
        />
        <button type="submit">Add to the list</button>

        <button
          onClick={() => {
            this.props.dispatch({
              type: "CLEAR-COMPLETED"
            });
          }}
          type="button"
        >
          Clear completed
        </button>
      </form>
    );
  }
}

export default TodoForm;
