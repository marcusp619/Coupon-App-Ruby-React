import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OfferContext } from '../Context/Context';

function Cart() {
  const { cart } = useContext(OfferContext);
  return (
    <Button variant="primary">
      <FontAwesomeIcon icon="shopping-cart" />{' '}
      <Badge variant="Light">{cart.length}</Badge>
    </Button>
  );
}

export default Cart;
