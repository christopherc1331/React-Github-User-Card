import React from "react";
import "./App.css";
import GithubUserCard from "./Components/GithubUserCard.js";
import GithubFollowerCard from "./Components/GithubFollowerCard.js";

class App extends React.Component {
  state = {
    githubUser: [],
    githubFollowers: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/christopherc1331")
      .then(res => res.json())
      .then(userInfo => this.setState({ githubUser: userInfo }))
      .catch(err => console.log(err));
    fetch("https://api.github.com/users/christopherc1331/followers")
      .then(res => res.json())
      .then(userInfo => this.setState({ githubFollowers: userInfo }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
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
