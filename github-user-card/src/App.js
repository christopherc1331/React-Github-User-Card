import React from "react";
import "./App.css";
import GithubUserCard from "./Components/GithubUserCard.js";
import GithubFollowerCard from "./Components/GithubFollowerCard.js";

class App extends React.Component {
  state = {
    inputText: "",
    githubUserName: "christopherc1331",
    githubUser: [],
    githubFollowers: []
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.state.githubUserName}`)
      .then(res => res.json())
      .then(userInfo => this.setState({ githubUser: userInfo }))
      .catch(err => console.log(err));
    fetch(`https://api.github.com/users/${this.state.githubUserName}/followers`)
      .then(res => res.json())
      .then(userInfo => this.setState({ githubFollowers: userInfo }))
      .catch(err => console.log(err));
  }

  changeHandler = event => {
    this.setState({ inputText: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log("submitted");
    this.setState({ githubUserName: this.state.inputText });
    this.setState({ inputText: "" });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.githubUserName !== this.state.githubUserName) {
      console.log("Component Did Update!");
      fetch(`https://api.github.com/users/${this.state.githubUserName}`)
        .then(res => res.json())
        .then(userInfo => this.setState({ githubUser: userInfo }))
        .catch(err => console.log(err));
      fetch(
        `https://api.github.com/users/${this.state.githubUserName}/followers`
      )
        .then(res => res.json())
        .then(userInfo => this.setState({ githubFollowers: userInfo }))
        .catch(err => console.log(err));
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header>
          <div className="formContainer">
            <form onSubmit={this.submitHandler}>
              <label hidden to="userName">
                Enter Github Username
              </label>
              <input
                name="userName"
                type="text"
                placeholder="Enter Github Username"
                value={this.state.inputText}
                onChange={this.changeHandler}
              />
              <button>Submit</button>
            </form>
          </div>

          <GithubUserCard
            avatar={this.state.githubUser.avatar_url}
            name={this.state.githubUser.name}
            joined={this.state.githubUser.created_at}
            bio={this.state.githubUser.bio}
            publicRepos={this.state.githubUser.public_repos}
            myBlog={this.state.githubUser.blog}
            followers={this.state.githubUser.followers}
            githubLink={this.state.githubUser.html_url}
          />
        </header>

        <h1>{this.state.githubUser.name}'s Followers Below:</h1>

        <div className="followerList">
          {this.state.githubFollowers.map(follower => (
            <GithubFollowerCard
              key={follower.id}
              avatar={follower.avatar_url}
              name={follower.login}
              githubLink={follower.html_url}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
