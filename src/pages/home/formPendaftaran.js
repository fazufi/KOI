import { useState, useEffect } from "react";
import wilayah from "../../DaerahJson/wilayah.json";
import { Modal, Button, Form } from "react-bootstrap";
import "../pages.css";

export default function FormDaftar() {
  const [show, setShow] = useState(false);
  const [namaDepan, setNamaDepan] = useState(null);
  const [namaBelakang, setNamaBelakang] = useState(null);
  const [email, setEmail] = useState(null);
  const [telepon, setTelepon] = useState(null);
  const [lahir, setLahir] = useState(null);
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
      namaDepan: namaDepan,
      namaBelakang: namaBelakang,
      email: email,
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

  const RippleButton = ({ children, onClick }) => {
    const [coords, setCoords] = useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = useState(false);

    useEffect(() => {
      if (coords.x !== -1 && coords.y !== -1) {
        setIsRippling(true);
        setTimeout(() => setIsRippling(false), 300);
      } else setIsRippling(false);
    }, [coords]);

    useEffect(() => {
      if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);

    return (
      <button
        className="ripple-button"
        onClick={(e) => {
          const rect = e.target.getBoundingClientRect();
          setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          onClick && onClick(e);
        }}
      >
        {isRippling ? (
          <span
            className="ripple"
            style={{
              left: coords.x,
              top: coords.y,
            }}
          />
        ) : (
          ""
        )}
        <span className="content">{children}</span>
      </button>
    );
  };

  return (
    <>
      <RippleButton className="Daftar" onClick={handleShow}>
        Daftar <br />
        Sekarang
      </RippleButton>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Modal.Header closeButton>
            <Modal.Title>Daftar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Nama Depan</Form.Label>
              <Form.Control onChange={(e) => setNamaDepan(e.target.value)} type="text" placeholder="Nama Depan" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nama Belakang</Form.Label>
              <Form.Control onChange={(e) => setNamaBelakang(e.target.value)} type="text" placeholder="Nama Belakang" required />
            </Form.Group>
            <hr />
            <Form.Group>
              <Form.Label>E-Mail</Form.Label>
              <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-Mail" required />
            </Form.Group>
            <hr />
            <Form.Label>Nomor Telepon / WhatsApp</Form.Label>
            <Form.Control onChange={(e) => setTelepon(e.target.value)} name="telepon" minLength={12} maxLength={14} pattern="[0-9\/]*" required placeholder="08** **** ****" />
            <hr />
            <Form.Label>Tanggal Lahir</Form.Label>
            <Form.Control onChange={(e) => setLahir(e.target.value)} name="lahir" type="date" required />
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
            <Button variant="secondary" className="button-alter" onClick={handleClose}>
              Batal
            </Button>
            <RippleButton type="submit" variant="primary">
              Daftar
            </RippleButton>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
