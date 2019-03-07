import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function OfferList({ name, title }) {
  return (
    <Row className="justify-content-md-center">
      <Col mx="auto" className="text-center text-title">
        <h1 className="text-capitalize font-weight-bold">
          {name} <strong>{title}</strong>
        </h1>
      </Col>
    </Row>
  );
}

export default OfferList;
