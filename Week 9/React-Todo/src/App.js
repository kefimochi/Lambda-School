import React from "react";
import UserList from "./components/userList";
// import TodoForm from "./components/TodoComponents/TodoForm";
import axios from "axios";
import "./styles/index.css";
import "./styles/all-users-container.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/search/users?q=kefi", {
        method: "get"
      })
      .then(res => {
        if (res.data.items.length > 0) {
          res.data.items.forEach(user => {
            axios.get(user.url, { mathod: "get" }).then(responseTwo => {
              this.setState({ users: [...this.state.users, responseTwo.data] });
            });
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  getMoreDescriptiveUser(url) {
    // Map over the existing array, overwrite users data
  }

  // function addUsersToDOM(users) {
  //   console.log("USERTEMS", users.items);
  //   users.items.forEach(person => {
  //     // Prevents undefined profiles from showing
  //     if (person === undefined) return;
  //     // Shows small cards for all found users
  //     extractUserObject(person);
  //   });
  // }

  // function extractUserObject(user) {
  //   axios
  //     .get(user.url, {
  //       method: "get"
  //     })
  //     .then(res => {
  //       console.log("Res", res.data);
  //       createUserComponent(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  render() {
    if (this.state.users.length > 0) {
      return (
        <div className="container">
          <UserList data={this.state.users} />
        </div>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  }
}

export default App;
