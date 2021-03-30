import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const token = localStorage.length !== 0 ? localStorage.getItem('auth') : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiVXNlciJ9fQ.lTIYra8Y-F_97Qj0Ln89Yjn_gOl5mJiDApJDjiePjic"
const decoded = jwt_decode(token);

export default class KOI extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark" expand="lg">
          <Link to="/koi" className="navbar-brand">KULIAH ONLINE AL-ISLAM</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/ramadhan">
                Al-Arbainar Ramadhaniyyah
              </Link>
              <NavDropdown title="Other" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/1.0">KOI 1.0</NavDropdown.Item>
                <NavDropdown.Item href="#action/1.1">KOI 1.1</NavDropdown.Item>
                <NavDropdown.Item href="#action/1.2">KOI 1.2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/2.0">KOI 2.0</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Navbar.Text>
              Signed in as: <Link to="/signin">{decoded.user.username}</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <div style={{ textAlign: 'center' }}>
          <p>
          </p>
          <p>
            🌟 KAMPUS ONLINE AL-ISLAM 🌟
        </p>
          <p>
            (Di bawah bimbingan Al-Ustadz Abu Zaidan)
            </p>
        </div>
      </div>
    )
  }
}
