import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="text"
        name="value"
        placeholder="change state"
        onChange={props.updateValue}
      />
      <button type="submit">Add to ther list</button>
      <button>Clear completed</button>
    </form>
  );
};

export default TodoForm;
