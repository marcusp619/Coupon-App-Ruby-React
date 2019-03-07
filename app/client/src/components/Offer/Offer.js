import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Offer(props) {
  const { name, description, terms, image_url } = props.offer;
  return (
    <StyledCard>
      <Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  width: 18rem;
`;
const Img = styled(Card.Img)`
  object-fit: scale-down;
  height: 280px;
  width: 100px;
  align-self: center;
`;

export default Offer;
