import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Col, Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "../pages.css";
import "react-phone-input-2/lib/style.css";
import FormDaftar from "./formPendaftaran";

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
        <p className="daurah">Daurah yang sedang berlangsung</p>
        <Container>
          <Row textAlign="center">
            <Col className="card-judul">
              <p>Al-Arbaun Ar-Ramadlaninyyah</p>
            </Col>
          </Row>
          <Row>
            <Col className="card-kitab">kitab</Col>
            <Col className="card-foto">foto2 kegiatan</Col>
          </Row>
        </Container>
        <Container>
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Circle-icons-image.svg/512px-Circle-icons-image.svg.png"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Media Heading</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
        </Container>
        <Container>
          <FormDaftar />
        </Container>
        <p className="daurah">Daurah yang telah terlaksana</p>
        <Container>
          <Row textAlign="center">
            <Col className="card-judul">
              <p>Al-Arbaun Al-Qur'aniyyah</p>
            </Col>
          </Row>
          <Row>
            <Col className="card-kitab">kitab</Col>
            <Col className="card-foto">foto2 kegiatan</Col>
          </Row>
        </Container>
        <Container>
          <Card>
            <Row className="no-gutters">
              <div className="col-auto">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Circle-icons-image.svg/512px-Circle-icons-image.svg.png" className="img-fluid" alt="" />
              </div>
              <div className="col">
                <div className="card-block px-2">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Description</p>
                  <a href="#" className="btn btn-primary">
                    BUTTON
                  </a>
                </div>
              </div>
            </Row>
            <div className="card-footer w-100 text-muted">Footer stating cats are CUTE little animals</div>
          </Card>
        </Container>
      </div>
    );
  }
}
