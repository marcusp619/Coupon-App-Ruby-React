import React, { useContext } from "react";
import { OfferContext } from "../Context/Context";
import styled from "styled-components";
import { Link } from "@reach/router";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

function Offer(props) {
  const { getOfferById, addToCart, setSingleOffer, singleOffer } = useContext(
    OfferContext
  );
  const { name, description, terms, image_url, inCart, id } = props.offer;

  return (
    <StyledCard>
      <StyledLink to={`/details/${id}`}>
        <Img variant="top" src={image_url} onClick={() => getOfferById(id)} />
      </StyledLink>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Button
        disabled={inCart ? true : false}
        variant="outline-primary"
        onClick={() => addToCart(id)}
      >
        Add To Cart
      </Button>
    </StyledCard>
  );
}

Offer.propTypes = {
  offer: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    terms: PropTypes.string,
    image_url: PropTypes.string,
    inCart: PropTypes.bool,
    id: PropTypes.number
  }).isRequired
};

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
