import React, { Fragment, useState, useEffect, useContext } from "react";
import Offer from "../Offer/Offer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../Title/Title";
import styled from "styled-components";
import { OfferContext } from "../Context/Context";

function OfferList() {
  const { offers } = useContext(OfferContext);
  let offerCards = offers.map(offer => {
    return <Offer key={offer.id} offer={offer} />;
  });

  return (
    <Fragment>
      <Container>
        <Title name="our" title="offers" />
        <Row>{offerCards}</Row>
      </Container>
    </Fragment>
  );
}
const Container = styled.div`
  padding: 30px;
`;

export default OfferList;
