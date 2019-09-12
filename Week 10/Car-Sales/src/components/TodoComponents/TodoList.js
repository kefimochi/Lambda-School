import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      listOfTodoes: []
    };
  }

  render() {
    return this.props.data ? (
      this.props.data.map(todo => {
        return (
          <Todo
            dispatch={this.props.dispatch}
            data={todo}
            key={todo.id}
            id={todo.id}
          />
        );
      })
    ) : (
      <h3>You completed all todos!</h3>
    );
  }
}

export default TodoList;
