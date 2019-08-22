import React from "react";
const Card = props => {
  if (
    props.user.name === "" ||
    props.user.email === "" ||
    props.user.role === ""
  ) {
    alert("Some field is empty, please fix it and try again!");
    return <></>;
  }
  return (
    <div class="card">
      <h3>{props.user.name}</h3>
      <h5>{props.user.role}</h5>
      <h7>{props.user.email}</h7>
      <button>Edit</button>
    </div>
  );
};

export default Card;
