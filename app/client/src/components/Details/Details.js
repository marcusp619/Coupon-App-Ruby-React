import React, { useState, useEffect, useContext } from "react";
import { OfferContext } from "../Context/Context";
import { Link } from "@reach/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Details(props) {
  const [loading, setLoading] = useState(true);
  const { singleOffer, addToCart } = useContext(OfferContext);
  let { id, name, description, terms, image_url, inCart } = singleOffer;
  console.log(singleOffer);

  return (
    <div>
      {singleOffer ? (
        <div className="container py-5">
          <Row>
            <Col>
              <h1>{name}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={image_url} className="img-fluid" alt="item display" />
            </Col>
            <Col>
              <p>{description}</p>
            </Col>
          </Row>
        </div>
      ) : (
        <div>Loading....</div>
      )}
      <div>
        <Button
          variant="outline-secondary"
          onClick={() => console.log("Back To Products")}
        >
          <Link to="/">Back To Products</Link>
        </Button>
        <Button
          disabled={inCart ? true : false}
          variant="outline-primary"
          onClick={() => addToCart(id)}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default Details;
