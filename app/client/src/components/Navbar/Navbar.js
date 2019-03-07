import React from "react";
import { Link } from "@reach/router";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

function Navbar() {
  return (
    <NavbarWrapper expand="lg">
      <NavBar.Brand>
        <Link to="/">ibotta</Link>
      </NavBar.Brand>
      <NavBar.Toggle aria-controls="basic-navbar-nav" />
      <NavBar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">Offers</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <StyledButton variant="outline-success">Search</StyledButton>
        </Form>
      </NavBar.Collapse>
    </NavbarWrapper>
  );
}

const StyledButton = styled(Button)``;
const NavbarWrapper = styled(NavBar)`
  background: rgb(75, 146, 141);
`;
export default Navbar;
