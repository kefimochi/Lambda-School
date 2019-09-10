import React from "react";

export default function reducer(state, action) {
  switch (action.type) {
    case "MODIFY":
      return action.newArr;
    default:
      return state;
  }
}

export const toDoList = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987543
  },
  {
    item: "Learn about react",
    completed: true,
    id: 3892987581
  },
  {
    item: "Learn about sass",
    completed: false,
    id: 3292987584
  },
  {
    item: "Learn about life",
    completed: false,
    id: 3892987580
  },
  {
    item: "Learn about death",
    completed: false,
    id: 3898987589
  }
];
