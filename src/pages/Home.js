import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./pages.css";

const token = localStorage.length !== 0 ? localStorage.getItem("auth") : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiVXNlciJ9fQ.lTIYra8Y-F_97Qj0Ln89Yjn_gOl5mJiDApJDjiePjic";
const decoded = jwt_decode(token);

export default class KOI extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark" expand="lg">
          <Link to="/koi" className="navbar-brand">
            KULIAH ONLINE AL-ISLAM
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/ramadhan">
                Al-Arbainar Ramadhaniyyah
              </Link>
            </Nav>
            <Navbar.Text>
              Signed in as: <Link to="/signin">{decoded.user.username}</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <p style={{ textAlign: "center", marginTop: 30 }}>
          <p className="koi-judul">KAMPUS ONLINE AL-ISLAM</p>
          <p>Description such as... Kampus Online Al-Islam didirikan pada.......... Ditujukan untuk..... Saat ini di bawah bimbingan Al-Ustadz Abu Zaidan</p>
        </p>
        <p className="daurah">Daurah yang telah terlaksana</p>
        <Container>
          <Row className="card-judul">Al-Arbaun Al-Qur'aniyyah</Row>
          <Row>
            <Col>gambar kitab</Col>
            <Col>foto2 kegiatan</Col>
          </Row>
        </Container>
        <p className="daurah">Daurah yang sedang berlangsung</p>
      </div>
    );
  }
}
