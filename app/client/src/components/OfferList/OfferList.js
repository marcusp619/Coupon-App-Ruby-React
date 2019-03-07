import React, { Fragment, useContext } from "react";
import Offer from "../Offer/Offer";
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
        <GridContainer>{offerCards}</GridContainer>
      </Container>
    </Fragment>
  );
}
const Container = styled.div`
  padding: 50px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px 25px;
`;

export default OfferList;
