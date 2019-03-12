import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Cart() {
  return (
    <Button variant="primary">
      <FontAwesomeIcon icon="shopping-cart" /> <Badge variant="Light">2</Badge>
    </Button>
  );
}

export default Cart;
