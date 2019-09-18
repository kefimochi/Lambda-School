import React, { Component } from "react";
import Login from "./login";
import { Route, Link } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import FriendsList from "./friendsList";
import FriendsForm from "./friendForm";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Friends App W/ Redux</h3>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/friends" component={FriendsList} />
        <PrivateRoute path="/create" component={FriendsForm} />
      </div>
    );
  }
}

export default App;
