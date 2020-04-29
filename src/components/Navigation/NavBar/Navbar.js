import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import styles from "./NavBar.module.css";

import logo from "assets/img/logo-hands.png";

const navBar = (props) => {
  let userNav = <Nav.Link href="/hi">Login | Register</Nav.Link>;

  if (props.user != null) {
    const userName = props.user.name;
    const profile = `/user/${props.user.id}`;
    const messages = `${profile}/messages`;
    const settings = `${profile}/settings`;

    userNav = (
      <NavDropdown title={userName}>
        <NavDropdown.Item href={profile}>
          <FontAwesomeIcon icon={faUserCircle} className={styles.ddmenu} />
          Profile
        </NavDropdown.Item>
        <NavDropdown.Item href={messages}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.ddmenu} />
          Messages
        </NavDropdown.Item>
        <NavDropdown.Item href={settings}>
          <FontAwesomeIcon icon={faCog} className={styles.ddmenu} />
          Settings
        </NavDropdown.Item>
      </NavDropdown>
    );
  }
  return (
    <Navbar bg="light" variant="light" expand="lg" className={styles.underline}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">{userNav}</Nav>
          <Form inline="true">
            <FormControl
              type="text"
              placeholder="Search..."
              className="mr-sm-2"
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navBar;
