import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

function Cart(props) {
  const { cart } = props;

  if (cart !== undefined) {
    console.log('running');
    let dropDownItems = cart.map(offer => (
      <Dropdown.Item key={offer.id}>
        <StyledImg src={offer.image_url} />
        {offer.name}
      </Dropdown.Item>
    ));

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

  return (
    <Dropdown drop="left">
      <StyledButton variant="primary">
        <FontAwesomeIcon icon="shopping-cart" />
        <Badge variant="Light">0</Badge>

        <Dropdown.Menu>
          <Dropdown.Item> Nothing In Cart </Dropdown.Item>
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
