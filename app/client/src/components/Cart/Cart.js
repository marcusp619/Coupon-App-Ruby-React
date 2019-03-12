import React, { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OfferContext } from '../Context/Context';
import styled from 'styled-components';

function Cart() {
  const { cart } = useContext(OfferContext);
  let dropDownItems;

  if (cart.length >= 1) {
    dropDownItems = cart.map(offer => (
      <Dropdown.Item key={offer.id}>
        <StyledImg src={offer.image_url} />
        {offer.name}
      </Dropdown.Item>
    ));
    console.log(dropDownItems);
  }

  return (
    <Dropdown drop="left">
      <StyledButton variant="primary">
        <FontAwesomeIcon icon="shopping-cart" />
        <Badge variant="Light">{cart.length}</Badge>

        <Dropdown.Menu>
          {dropDownItems && <div>{dropDownItems}</div>}
        </Dropdown.Menu>
      </StyledButton>
    </Dropdown>
  );
}

const StyledButton = styled(Dropdown.Toggle)`
  margin-left: 8px;
`;

const StyledImg = styled.img`
  margin-right: 10px;
  width: 15px;
`;

export default Cart;
