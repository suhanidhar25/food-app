import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./contact.css";

function contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you'd send this data to a server or API
    console.log("Form submitted:", formData);
    alert("Thanks for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <h2>CONTACT US</h2>
      <div className="contact-container">
        <form action="" className="contact-form" onSubmit={handleSubmit}>
          <label>Name : </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email : </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message : </label>
          <input
            type="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info px-5">
          <h3>Our Location</h3>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Tasty Street
            <br />
            Flavor Town, FT 56789
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faPhone} /> +91 12345 98765
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> info@sliceandspoon.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default contact;
