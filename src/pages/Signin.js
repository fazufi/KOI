import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom";


export default class Signin extends Component {
  async onSubmit(e) {
    e.preventDefault()
    const response = await axios.post("http://localhost:5000/api/signin", {
      email: e.target.email.value,
      password: e.target.password.value,
    })
    if (response.data.message === "Email Wrong ...") {
      alert("Email wrong ...")
    } else if (response.data.message === "Password wrong ...") {
      alert("Password Wrong ...")
    } else {
      localStorage.setItem("auth", response.data.token)
      window.location.pathname = "/koi"
    }
  }
  render() {
    return (
      <Container fluid>
        <Row style={{ width: "100%", height: "100%", position: 'fixed' }}>
          <Col style={{ backgroundColor: "blue" }}>
            <Modal.Dialog>
              <Modal.Header >
                <Modal.Title>SIGN IN</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={e => this.onSubmit(e)}>
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                      Email
                </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="email" placeholder="Email" name="email" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                      Password
                </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="password" placeholder="Password" name="password" autoComplete="off" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Col >
                      <Button type="submit">Sign in</Button>
                      <Link to="/signup">
                        <Button >
                          Sign up
                        </Button>
                      </Link>
                    </Col>
                  </Form.Group>
                </Form>
              </Modal.Body>
            </Modal.Dialog>
          </Col>
        </Row>
      </Container>
    )
  }
}