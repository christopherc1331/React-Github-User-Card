import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const GithubFollowerCard = ({ avatar, name, githubLink }) => (
  <Card
    style={{
      width: "15rem"
    }}
  >
    <Card.Header>{name}</Card.Header>
    <Card.Img src={avatar} />
    <Card.Body>
      <Button href={githubLink} variant="primary">
        Github Profile
      </Button>
    </Card.Body>
  </Card>
);

export default GithubFollowerCard;
