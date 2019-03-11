import React, { useEffect, useContext, useRef } from 'react';
import { OfferContext } from '../Context/Context';
import { Link } from '@reach/router';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Details() {
  const { singleOffer, setSingleOffer, offers, setOffers } = useContext(
    OfferContext
  );
  const justMounted = useRef(true);
  const { id, name, description, terms, image_url, inCart } = singleOffer;

  function updateOffers() {
    let tempOffer = { ...singleOffer, inCart: false };
    let newOffers = offers.map(offer =>
      offer.id === tempOffer.id ? singleOffer : offer
    );

    setOffers(newOffers);
  }

  useEffect(() => {
    updateOffers();
  }, [singleOffer]);

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
        <Button variant="outline-secondary">
          <Link to="/">Back To Products</Link>
        </Button>
        <Button
          disabled={inCart ? true : false}
          variant="outline-primary"
          onClick={() =>
            setSingleOffer(prevSingleOffer => {
              return { ...prevSingleOffer, inCart: true };
            })
          }
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default Details;
