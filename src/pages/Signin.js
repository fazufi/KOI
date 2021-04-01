import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faEyeSlash, faKey } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;
const eyeX = <FontAwesomeIcon icon={faEyeSlash} />;
const key = <FontAwesomeIcon icon={faKey} />;
const mail = <FontAwesomeIcon icon={faEnvelope} />;

const RippleButton = ({ children, onClick }) => {
  const [coords, setCoords] = React.useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  React.useEffect(() => {
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

export default function Signin() {
  const [mata, setMata] = React.useState(false);
  const [show, setShow] = React.useState(eyeX);

  async function onSubmit(e) {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/signin", {
      email: e.target.email.value,
      password: e.target.password.value,
    });
    if (response.data.message === "Email Wrong ...") {
      alert("Email wrong ...");
    } else if (response.data.message === "Password wrong ...") {
      alert("Password Wrong ...");
    } else {
      localStorage.setItem("auth", response.data.token);
      window.location.pathname = "/koi";
    }
  }

  return (
    <div className="body-signin" style={{ width: "100%", height: "100%", position: "fixed" }}>
      <div class="masukBox">
        <img src="elprof.jpg" class="user" />
        <h2>Masuk</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <p>Email {mail}</p>
          <input type="text" name="email" placeholder=" Email" required />
          <p>Password {key}</p>
          <input type={mata ? "text" : "password"} name="password" placeholder="******" autoComplete="off" required />
          <i
            className="toggle-pwd"
            onClick={
              mata
                ? (e) => {
                    setMata(false);
                    setShow(eyeX);
                  }
                : (e) => {
                    setMata(true);
                    setShow(eye);
                  }
            }
          >
            {show}
          </i>
          <RippleButton className="ripple" type="submit">
            Masuk
          </RippleButton>
          <i style={{ padding: 10 }}>Belum mendaftar ?</i>
          <Link to="/signup">
            <button className="button-alter">Daftar</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

/////////////////////////////////////////////////////////////////////////
/* export default class Signin extends Component {
  state = {
    mata: false,
  };
  async onSubmit(e) {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/signin", {
      email: e.target.email.value,
      password: e.target.password.value,
    });
    if (response.data.message === "Email Wrong ...") {
      alert("Email wrong ...");
    } else if (response.data.message === "Password wrong ...") {
      alert("Password Wrong ...");
    } else {
      localStorage.setItem("auth", response.data.token);
      window.location.pathname = "/koi";
    }
  }

  render() {
    return (
      <div className="body-signin" style={{ width: "100%", height: "100%", position: "fixed" }}>
        <div class="masukBox">
          <img src="avatar.png" class="user" />
          <h2>Masuk</h2>
          <form onSubmit={(e) => this.onSubmit(e)}>
            <p>Email</p>
            <input type="text" name="email" placeholder=" Email" required />
            <p>Password</p>
            <input type={this.state.mata ? "text" : "password"} name="password" placeholder="******" autoComplete="off" required />
            <i onClick={(e) => (this.state.mata ? this.setState({ mata: false }) : this.setState({ mata: true }))}>{eye}</i>
            <RippleButton className="ripple" type="submit">
              Masuk
            </RippleButton>
            <i style={{ padding: 10 }}>Belum mendaftar ?</i>
            <Link to="/signup">
              <button className="button-alter">Daftar</button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
} */
