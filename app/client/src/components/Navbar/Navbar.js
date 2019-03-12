import React from 'react';
import { Link } from '@reach/router';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Cart from '../Cart/Cart';
import styled from 'styled-components';

function Navbar() {
  return (
    <NavbarWrapper expand="lg">
      <StyledBrand>
        <StyledLink to="/">ibotta</StyledLink>
      </StyledBrand>
      <NavBar.Toggle aria-controls="basic-navbar-nav" />
      <NavBar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <StyledLink to="/">Offers</StyledLink>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="success">Search</Button>
        </Form>
        <Cart />
      </NavBar.Collapse>
    </NavbarWrapper>
  );
}

const StyledLink = styled(Link)`
  color: var(--mainWhite);
`;

const StyledBrand = styled(NavBar.Brand)`
  font-weight: 700;
`;

const NavbarWrapper = styled(NavBar)`
  background: rgb(75, 146, 141);
`;

export default Navbar;
