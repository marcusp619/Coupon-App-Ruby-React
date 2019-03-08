import React, { useState, useEffect, useContext } from "react";
import { OfferContext } from "../Context/Context";
import { Link } from "@reach/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Details(props) {
  const [loading, setLoading] = useState(true);
  const { singleOffer } = useContext(OfferContext);
  let { id, name, description, terms, image_url } = singleOffer;
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
    </div>
  );
}

export default Details;
