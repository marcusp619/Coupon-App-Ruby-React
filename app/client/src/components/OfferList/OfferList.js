import React, { Fragment, useContext } from "react";
import Offer from "../Offer/Offer";
import Row from "react-bootstrap/Row";
import Title from "../Title/Title";
import styled from "styled-components";
import { OfferContext } from "../Context/Context";
import CardDeck from "react-bootstrap/CardDeck";

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
