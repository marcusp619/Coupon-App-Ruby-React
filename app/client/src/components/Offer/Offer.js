import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Offer(props) {
  const { name, description, terms, image_url } = props.offer;
  return (
    <StyledCard>
      <StyledLink to="/details">
        <Img
          variant="top"
          src={image_url}
          onClick={() => console.log("you clicked me")}
        />
      </StyledLink>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Button variant="primary">Add To Cart</Button>
    </StyledCard>
  );
}

const StyledLink = styled(Link)`
  display: grid;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  width: 18rem;
`;
const Img = styled(Card.Img)`
  object-fit: scale-down;
  height: 296px;
  width: 160px;
`;

export default Offer;
