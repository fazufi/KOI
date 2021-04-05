import { useState, useEffect } from "react";
import wilayah from "../../DaerahJson/wilayah.json";
import { Modal, Button, Form } from "react-bootstrap";

export default function FormDaftar() {
  const [show, setShow] = useState(false);
  const [nama, setNama] = useState(null);
  const [telepon, setTelepon] = useState(null);
  const [alamat, setAlamat] = useState(null);
  const [provinsi, setProvinsi] = useState(null);
  const [kabupaten, setKabupaten] = useState(null);
  const [kecamatan, setKecamatan] = useState(null);
  const [kelurahan, setKelurahan] = useState(null);
  const [tipe, setTipe] = useState(null);
  const [radio, setRadio] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(provinsi, kabupaten, kecamatan, kelurahan);

  useEffect(() => {
    // console.log(radio);
  });
  const handleRadio = (e) => {
    const { name, value } = e.target;
    setRadio({
      ...radio,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      nama: nama,
      telepon: telepon,
      alamat: alamat,
      provinsi: wilayah[provinsi].name,
      kabupaten: wilayah[provinsi].regencies[kabupaten].name,
      kecamatan: wilayah[provinsi].regencies[kabupaten].districts[kecamatan].name,
      kelurahan: wilayah[provinsi].regencies[kabupaten].districts[kecamatan].villages[kelurahan].name,
      gender: radio.gender,
      golongan: radio.golongan,
    };
    localStorage.setItem("pendaftar", JSON.stringify(data));
    console.log(data);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Daftar Sekarang
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Modal.Header closeButton>
            <Modal.Title>Daftar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control onChange={(e) => setNama(e.target.value)} type="text" placeholder="Masukkan Nama Lengkap" required />
            </Form.Group>
            <hr />
            <Form.Label>Nomor Telepon / WhatsApp</Form.Label>
            <Form.Control onChange={(e) => setTelepon(e.target.value)} name="telepon" minLength={12} maxLength={14} pattern="[0-9\/]*" required placeholder="08** **** ****" />
            <hr />
            <Form.Group>
              <Form.Label>Alamat Rumah</Form.Label>
              <Form.Control onChange={(e) => setAlamat(e.target.value)} type="text" placeholder="Nama Jalan, no. rumah, RT/RW" required />
            </Form.Group>
            <Form.Group controlId="Daerah">
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
                </option>
                {wilayah.map((item, i) => (
                  <option name={item.name} value={item.id}>
                    {item.name}
                  </option>
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
                      setKecamatan(wilayah[provinsi].regencies[kabupaten].districts.findIndex((x) => x.id === e.target.value));
                    }}
                    as="select"
                    required
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
                      setKelurahan(wilayah[provinsi].regencies[kabupaten].districts[kecamatan].villages.findIndex((x) => x.id === e.target.value));
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
            <Form.Group onChange={(e) => setTipe(e.target.id)} required>
              <Form.Label>Pernah belajar di Ma'had Al-Islam Surakarta ?</Form.Label>
              <Form.Check type="radio" name="golongan" value="Ma'had" id="1" label="Ya" onChange={handleRadio} />
              {tipe === "1" ? <Form.Control type="text" id="1" name="golongan" placeholder="Nomor Murid" onChange={handleRadio} /> : null}
              <Form.Check type="radio" name="golongan" value="Umum" id="2" label="Tidak" onChange={handleRadio} defaultChecked />
            </Form.Group>
            <hr />
            <Form.Group required>
              <Form.Label>Ikhwan / Akhwat</Form.Label>
              <Form.Check type="radio" name="gender" value="ikhwan" id="1" label="Ikhwan" onChange={handleRadio} defaultChecked />
              <Form.Check type="radio" name="gender" value="akhwat" id="2" label="Akhwat" onChange={handleRadio} />
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
