import React, { Fragment } from 'react';
import Offer from '../Offer/Offer';
import Title from '../Title/Title';
import Button from 'react-bootstrap/Button';
import { Link } from '@reach/router';
import styled from 'styled-components';

function OfferList(props) {
  const {
    offers,
    filteredOffers,
    setFilteredOffers,
    getOfferById,
    singleOffer,
    setSingleOffer,
    updateOffers
  } = props;

  let offerCards = offers.map(offer => {
    return (
      <Offer
        key={offer.id}
        offer={offer}
        setSingleOffer={setSingleOffer}
        singleOffer={singleOffer}
        getOfferById={getOfferById}
        updateOffers={updateOffers}
      />
    );
  });

  let filteredOfferCards = filteredOffers.map(offer => {
    return <Offer key={offer.id} offer={offer} />;
  });

  if (filteredOfferCards.length > 0) {
    return (
      <Fragment>
        <Container>
          <Title name="Your" title="Search Results" />
          <GridContainer>{filteredOfferCards}</GridContainer>
          <Button
            variant="outline-secondary"
            onClick={() => setFilteredOffers([])}
          >
            <Link to="/">Back To Products</Link>
          </Button>
        </Container>
      </Fragment>
    );
  }

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
