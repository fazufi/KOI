import React, { Component } from "react";
import { Container, Row, Col, Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "react-phone-input-2/lib/style.css";
import "../pages.css";
import NavBar from "../Navbar";
import FormDaftar from "./formPendaftaran";

// const token = localStorage.length !== 0 ? localStorage.getItem("auth") : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiVXNlciJ9fQ.lTIYra8Y-F_97Qj0Ln89Yjn_gOl5mJiDApJDjiePjic";
// const decoded = jwt_decode(token);

export default class KOI extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <p style={{ textAlign: "center", margin: 30 }}>
          <p className="koi-judul">KAMPUS ONLINE AL-ISLAM</p>
          <p>
            Deskripsi... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
        </p>
        <p className="daurah">Daurah yang sedang berlangsung</p>
        <Container>
          <h5>Al-Arba'un Ar-Ramadlaniyyah</h5>
          <Media>
            <img className="mr-3" src="ramadlan.png" alt=" " />
            <Media.Body>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
        </Container>
        <Row style={{ justifyContent: "center" }}>
          <FormDaftar />
        </Row>
        <Container>
          <Row style={{ justifyContent: "center" }} className="px-3 mb-5">
            <img src="Daurah 5 Ramadlan 400.jpg" className="img-fluid" alt="" />
          </Row>
        </Container>
        <p className="daurah">Daurah yang telah terlaksana</p>
        <Container>
          <h5>1. Kitab Al-Arba'in An-Nawawiyyah</h5>
          <Media>
            <img className="mr-3" src="nawawi.jpg" alt=" " />
            <Media.Body>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
        </Container>
        <Container>
          <Row style={{ justifyContent: "center" }} className="px-3 mb-5">
            <img src="Daurah 1 Arba'in Nawawi 400.jpg" className="img-fluid" alt="" />
          </Row>
        </Container>
        <Container>
          <h5>2. Al-Arba'un Al-Qur`aniyyah</h5>
          <Media>
            <img className="mr-3" src="qurani.jpg" alt=" " />
            <Media.Body>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
        </Container>
        <Container>
          <Row style={{ justifyContent: "center" }} className="px-3 mb-5">
            <img src="Daurah 2 Quran 400.jpg" className="img-fluid" alt="" />
          </Row>
        </Container>
        <Container>
          <h5>3. Kitab Matan Al-Khiraqi</h5>
          <Media>
            <img className="mr-3" src="khiraqi.jpg" alt=" " />
            <Media.Body>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
        </Container>
        <Container>
          <Row style={{ justifyContent: "center" }} className="px-3 mb-5">
            <img src="Daurah 3 Khiraqi 400.jpg" className="img-fluid" alt="" />
          </Row>
        </Container>
        <Container>
          <h5>4. Al-Arba'un An-Nisa`iyyah</h5>
          <Media>
            <img className="mr-3" src="nisai.png" alt=" " />
            <Media.Body>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
        </Container>
        <Container>
          <Row style={{ justifyContent: "center" }} className="px-3 mb-5">
            <img src="Daurah 4 Nisaiyah 400.jpg" className="img-fluid" alt="" />
          </Row>
        </Container>
      </div>
    );
  }
}
