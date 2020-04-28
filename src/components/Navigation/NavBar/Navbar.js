import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import logo from 'assets/img/logo-hands.png'

const navBar = (props) => {

  let userName = null;

  if (props.profile != null) {
    userName = props.profile.name;
  } else {
    userName = "Guest";
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/hi">{userName}</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search ShareIt"
            className="mr-sm-2"
          />
          <Button variant="outline-warning">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default navBar;