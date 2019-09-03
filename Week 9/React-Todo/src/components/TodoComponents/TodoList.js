import React from "react";
import Todo from "./Todo";

{
  /* receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array. */
}
// recieves changer functions that set the state
const TodoList = props => {
  return props.data ? (
    props.data.map(todo => {
      console.log(todo);
      // Append child somehow
      return <Todo data={todo} key={todo.id} />;
    })
  ) : (
    <h3>You completed all todos!</h3>
  );
};

export default TodoList;
