import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    githubUser: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/christopherc1331")
      .then(res => res.json())
      .then(res2 => console.log("fetch request data: ", res2))
      .then(userInfo => this.setState(userInfo))
      .catch(err => console.log(err));
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
