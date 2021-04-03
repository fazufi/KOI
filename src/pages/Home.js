import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./pages.css";
import wilayah from "../DaerahJson/wilayah.json";

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
        <Container></Container>
      </div>
    );
  }
}

function FormDaftar() {
  const [show, setShow] = React.useState(true);
  const [provinsi, setProvinsi] = React.useState(11);
  const [kabupaten, setKabupaten] = React.useState(1101);
  const [kecamatan, setKecamatan] = React.useState(1101010);

  const handleClose = () => setShow(true);
  const handleShow = () => setShow(false);
  const kab = wilayah.findIndex((x) => x.id == provinsi);
  const kec = wilayah[kab].regencies.findIndex((x) => x.id == kabupaten);
  const kel = wilayah[kab].regencies[kec].districts.findIndex((x) => x.id == kecamatan);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Daftar Sekarang
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Daftar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Nama Lengkap" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Kota Domisili</Form.Label>
              <Form.Control type="text" placeholder="Kota Domisili" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Provinsi</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setProvinsi(e.target.value);
                  setKabupaten(parseInt(e.target.value + "01"));
                  setKecamatan(parseInt(e.target.value + "01010"));
                }}
                as="select"
              >
                {wilayah.map((item, i) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </Form.Control>
              <Form.Label>Kabupaten / Kota</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setKabupaten(e.target.value);
                  setKecamatan(parseInt(e.target.value + "010"));
                }}
                as="select"
              >
                {wilayah[kab].regencies.map((item, i) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </Form.Control>
              <Form.Label>Kecamatan</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setKecamatan(e.target.value);
                }}
                as="select"
              >
                {wilayah[kab].regencies[kec].districts.map((item, i) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </Form.Control>
              <Form.Label>Kelurahan</Form.Label>
              <Form.Control as="select">
                {wilayah[kab].regencies[kec].districts[kel].villages.map((item, i) => (
                  <option>{item.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>NM / Umum</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Nama Lengkap" />
              <Form.Text className="text-muted">NM = Nomor Murid bagi peserta yang pernah belajar di Ma'had Al-Islam Surakarta.</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Ikhwan / Akhwat</Form.Label>
              <Form.Check type="radio" name="gender" value="ikhwan" id="1" label="Ikhwan" />
              <Form.Check type="radio" name="gender" value="akhwat" id="2" label="Akhwat" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Batal
          </Button>
          <Button variant="primary">Daftar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
