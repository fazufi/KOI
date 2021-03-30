import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Form, Button, Modal, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class Signup extends Component {
  async onSubmit(e) {
    e.preventDefault()
    const response = await axios.post("http://localhost:5000/api/signup", {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value
    })
    if (response.data.message === "Email already used ...") {
      alert("Email already used ...")
    } else {
      window.location.pathname = "/signin"
    }
  }
  render() {
    return (
      <Container fluid>
        <Row style={{ width: "100%", height: "100%", position: 'fixed', backgroundColor: "yellow" }}>
          <Col>
            <Modal.Dialog>
              <Modal.Header >
                <Modal.Title>SIGN UP</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={e => this.onSubmit(e)}>

                  <Form.Group as={Row} controlId="formHorizontalUsername">
                    <Form.Label column sm={2}>
                      Username
                </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Username" name="username" required />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                      Email
                </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="email" placeholder="Email" name="email" required />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                      Password
                </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="password" placeholder="Password" name="password" autoComplete="off" required />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Col >
                      <Button type="submit">Sign up</Button>
                      <Link to="/signin">
                        <Button >
                          Sign in
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