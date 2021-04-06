import React, { Component } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./pages.css";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar className="navbar" bg="white" variant="light" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">
            <Row>
              <Col xs={3}>
                <img className="mr-3 ml-2" src="koi.png" alt="" />
              </Col>
              <Col xs={9}>
                <img className="mt-3" src="Koi brand inline.png" alt="" />
              </Col>
            </Row>
          </Link>
        </Container>
      </Navbar>
    );
  }
}
