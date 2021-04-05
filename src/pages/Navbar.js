import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./pages.css";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar className="navbar" bg="white" variant="light" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">
            <img width={80} height={64} className="mr-3" src="koi.png" alt="" />
            <span className="koinavbar">KULIAH ONLINE AL-ISLAM</span>
          </Link>
        </Container>
      </Navbar>
    );
  }
}
