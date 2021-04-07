import React from "react";
import axios from "axios";

import "./components/Uploaders/main.scss";
import uplodIcon from "./components/Uploaders/img/upload.png";
const API_URL = process.env.REACT_APP_API_URL;

export default function Admin() {
  const handleChange = async (e) => {
    let formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios.post(API_URL + "pelatihan/upload", formData); 
  };

  return (
    <>
    <h3> upload gambar program di sini</h3>
      <div className="file-uploader-mask d-flex justify-content-center align-items-center">
        <img
          className="file-uploader-icon "
          src={uplodIcon}
          alt="Upload-Icon"
        />
      </div>
      <input
      
        className="file-input"
        type="file"
        id="single-uploder"
        onChange={handleChange}
      />
    </>
  );
}
