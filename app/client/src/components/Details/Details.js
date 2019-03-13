import React from 'react';
import { Link } from '@reach/router';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Details(props) {
  const { singleOffer, setSingleOffer } = props;
  const { name, description, image_url, inCart } = singleOffer;

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
