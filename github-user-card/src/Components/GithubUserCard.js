import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const GithubUserdiv = ({
  avatar,
  name,
  joined,
  bio,
  publicRepos,
  myBlog,
  followers,
  githubLink
}) => (
  <Card
    style={{
      width: "18rem"
    }}
  >
    <Card.Img variant="top" src={avatar} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{bio}</Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>Joined in {joined}</ListGroupItem>
      <ListGroupItem>{publicRepos} Public Repos</ListGroupItem>
      <ListGroupItem># Of Followers: {followers}</ListGroupItem>
    </ListGroup>
    <Card.Body>
      <Card.Link href={myBlog}>My Blog</Card.Link>
      <Card.Link href={githubLink}>Github Profile</Card.Link>
    </Card.Body>
  </Card>
);

export default GithubUserdiv;
