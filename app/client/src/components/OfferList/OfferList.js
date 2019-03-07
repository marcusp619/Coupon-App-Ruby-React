import React, { Fragment, useState } from "react";
import Offer from "../Offer/Offer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../Title/Title";
import styled from "styled-components";

function OfferList() {
  const [offers, setOffers] = useState([]);

  return (
    <Fragment>
      <Container>
        <Title name="our" title="offers" />
        <Row>hold up</Row>
      </Container>
    </Fragment>
  );
}
const Container = styled.div`
  padding: 5px;
`;

export default OfferList;
