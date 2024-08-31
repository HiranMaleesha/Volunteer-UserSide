import React, { useState } from "react";
import "./VolunteerRegistrationForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VolunteerRegistrationForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    Gmail: "",
    ContactNo: "",
    address: "",
    Role: "",
    NIC: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Name validation (only letters)
    if (name === "name") {
      const nameRegex = /^[A-Za-z\s]*$/;
      if (!nameRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: "Please enter only letters.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: "",
        }));
      }
    }

    // Phone number validation (only numbers)
    if (name === "ContactNo") {
      const phoneRegex = /^[0-9]*$/;
      if (!phoneRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ContactNo: "Please enter only numbers.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ContactNo: "",
        }));
      }
    }

    // Gmail validation (only @gmail.com)
    if (name === "Gmail") {
      const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      if (!gmailRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          Gmail: "Please enter a valid Gmail address.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          Gmail: "",
        }));
      }
    }

    // NIC validation (12 digits or 9 digits followed by 'v')
    if (name === "NIC") {
      const nicRegex = /^(\d{12}|\d{9}v)$/i;
      if (!nicRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          NIC: "Please enter a valid NIC number (12 digits or 9 digits followed by 'v').",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          NIC: "",
        }));
      }
    }

    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for any errors before submission
    if (Object.values(errors).some((error) => error !== "")) {
      window.alert("Please correct the errors before submitting.");
      return;
    }

    console.log(inputs);
    await sendRequest();
    window.alert("User added successfully!");
    navigate("/");
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/users", {
        name: String(inputs.name),
        Gmail: String(inputs.Gmail),
        ContactNo: String(inputs.ContactNo),
        address: String(inputs.address),
        Role: String(inputs.Role),
        NIC: String(inputs.NIC),
      })
      .then((res) => res.data);
    console.log(inputs);
  };

  return (
    <div className="popup-form-overlay">
      <div className="popup-form-container">
        <h1 className="popup-form-header">Volunteer Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="popup-form-field">
            <label htmlFor="name" className="popup-form-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              required
              className="popup-form-input"
            />
            {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
          </div>
          <div className="popup-form-field">
            <label htmlFor="Gmail" className="popup-form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="Gmail"
              value={inputs.Gmail}
              onChange={handleChange}
              required
              className="popup-form-input"
            />
            {errors.Gmail && <div style={{ color: "red" }}>{errors.Gmail}</div>}
          </div>
          <div className="popup-form-field">
            <label htmlFor="phone" className="popup-form-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="ContactNo"
              name="ContactNo"
              value={inputs.ContactNo}
              onChange={handleChange}
              required
              className="popup-form-input"
            />
            {errors.ContactNo && (
              <div style={{ color: "red" }}>{errors.ContactNo}</div>
            )}
          </div>
          <div className="popup-form-field">
            <label htmlFor="NIC" className="popup-form-label">
              NIC Number
            </label>
            <input
              type="text"
              id="NIC"
              name="NIC"
              value={inputs.NIC}
              onChange={handleChange}
              required
              className="popup-form-input"
            />
            {errors.NIC && <div style={{ color: "red" }}>{errors.NIC}</div>}
          </div>
          <div className="popup-form-field">
            <label htmlFor="address" className="popup-form-label">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={inputs.address}
              onChange={handleChange}
              required
              className="popup-form-input"
            />
          </div>
          <div className="popup-form-field">
            <label name="Role" className="popup-form-label">
              Role
            </label>
            <select
              name="Role"
              value={inputs.Role}
              onChange={handleChange}
              className="popup-form-input"
              required
            >
              <option value="" disabled>
                Select role
              </option>
              <option value="Singer">Singer</option>
              <option value="Dancer">Dancer</option>
              <option value="Announcer">Announcer</option>
              <option value="Entrance Team">Entrance Team</option>
              <option value="Ticket Checker">Ticket Checker</option>
            </select>
          </div>

          <button type="submit" className="popup-form-button">
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerRegistrationForm;
