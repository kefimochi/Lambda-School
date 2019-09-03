import React from "react";
import Todo from "./Todo";

{
  /* receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array. */
}
// recieves changer functions that set the state
const TodoList = props => {
  if (props.data === undefined) return <h3>Empty</h3>;
  return props.data.map(todo => {
    console.log(todo);
    // Append child somehow
    return <Todo data={props.data} />;
  });
};

export default TodoList;
