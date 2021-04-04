import { useState } from "react";
import wilayah from "../../DaerahJson/wilayah.json";
import PhoneInput from "react-phone-input-2";
import { Modal, Button, Form, FormControl } from "react-bootstrap";

export default function FormDaftar() {
  const [show, setShow] = useState(true);
  const [namaLengkap, setNamaLengkap] = useState(null);
  const [provinsi, setProvinsi] = useState(null);
  const [kabupaten, setKabupaten] = useState(null);
  const [kecamatan, setKecamatan] = useState(null);
  const [kelurahan, setKelurahan] = useState(null);
  const [tipe, setTipe] = useState(null);
  const [phone, setPhone] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(provinsi, kabupaten, kecamatan, kelurahan);

  const handleOnChange = (value) => {
    setPhone(value);
  };
  const handleSubmit = () => {
    console.log("submit Cwoyy");
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Daftar Sekarang
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Daftar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Nama Lengkap" required />
            </Form.Group>
            <hr />
            <Form.Label>Nomor Telepon / WhatsApp</Form.Label>
            <Form.Control minLength={12} pattern="[0-9\/]*" required placeholder="08** **** ****" />
            {/* <Feedback type="invalid">Yo this is required</Feedback> */}
            <Form.Label className="mt-3">Nomor Telepon / WhatsApp (package)</Form.Label>
            <PhoneInput name="phoneNumber" type="text" country={"id"} value="" onChange={handleOnChange} required />
            <hr />
            <Form.Group>
              <Form.Label>Alamat Rumah</Form.Label>
              <Form.Control type="text" placeholder="Nama Jalan, no. rumah, RT/RW" required />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Provinsi</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setProvinsi(wilayah.findIndex((x) => x.id === e.target.value));
                }}
                as="select"
                required
              >
                <option value="" disabled selected>
                  Pilih Provinsi
                </option>{" "}
                {wilayah.map((item, i) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </Form.Control>
              {provinsi != null ? (
                <>
                  <Form.Label className="mt-3">Kabupaten / Kota</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setKabupaten(wilayah[provinsi].regencies.findIndex((x) => x.id === e.target.value));
                    }}
                    as="select"
                    required
                  >
                    <option value="" disabled selected>
                      Pilih Kabupaten
                    </option>
                    {wilayah[provinsi].regencies.map((item, i) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </Form.Control>
                </>
              ) : null}
              {provinsi != null && kabupaten != null ? (
                <>
                  <Form.Label className="mt-3">Kecamatan</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setKecamatan(wilayah[provinsi].regencies[kabupaten].districts.findIndex((x) => x.id == e.target.value));
                    }}
                    as="select"
                    required
                    id="po"
                  >
                    <option value="" disabled selected>
                      Pilih Kecamatan
                    </option>
                    {wilayah[provinsi].regencies[kabupaten].districts.map((item, i) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </Form.Control>
                </>
              ) : null}
              {provinsi != null && kabupaten != null && kecamatan != null ? (
                <>
                  <Form.Label className="mt-3">Kelurahan</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setKelurahan(wilayah[provinsi].regencies[kabupaten].districts[kecamatan].villages.findIndex((x) => x.id == e.target.value));
                    }}
                    as="select"
                    required
                  >
                    <option value="" disabled selected>
                      Pilih Kelurahan
                    </option>
                    {wilayah[provinsi].regencies[kabupaten || 0].districts[kecamatan].villages.map((item, i) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </Form.Control>
                </>
              ) : null}
            </Form.Group>
            <hr />
            <Form.Group onChange={(e) => setTipe(e.target.value)}>
              <Form.Label>Pernah belajar di Ma'had Al-Islam Surakarta ?</Form.Label>
              <Form.Check type="radio" name="golongan-peserta" value="Ma'hady" id="1" label="Ya" />
              {tipe == "Ma'hady" ? <Form.Control type="text" name="golongan-peserta" placeholder="Nomor Murid" /> : null}
              <Form.Check type="radio" name="golongan-peserta" value="Umum" id="2" label="Tidak" />
            </Form.Group>
            <hr />
            <Form.Group>
              <Form.Label>Ikhwan / Akhwat</Form.Label>
              <Form.Check type="radio" name="gender" value="ikhwan" id="1" label="Ikhwan" />
              <Form.Check type="radio" name="gender" value="akhwat" id="2" label="Akhwat" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Batal
            </Button>
            <Button type="submit" variant="primary">
              Daftar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
