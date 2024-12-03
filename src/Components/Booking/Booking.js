import React, { useState } from "react";
import "./Booking.css";

export default function Booking({ Doctor }) {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [contactError, setContactError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [doctorError, setDoctorError] = useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleDoctorSelection = (doctorName) => {
    setSelectedDoctor(doctorName);
    document.getElementById("dropdownMenuButton").classList.toggle("show");
  };

  const validateForm = () => {
    let valid = true;

    setNameError("");
    setAgeError("");
    setContactError("");
    setGenderError("");
    setDoctorError("");
    setDateError("");
    setTimeError("");

    if (name.trim() === "") {
      setNameError("Name is required.");
      valid = false;
    }

    if (age <= 0 || isNaN(age)) {
      setAgeError("Please enter a valid age.");
      valid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(contactNumber)) {
      setContactError("Please enter a valid 10-digit phone number.");
      valid = false;
    }

    if (!gender) {
      setGenderError("Please select your gender.");
      valid = false;
    }

    if (!selectedDoctor) {
      setDoctorError("Please select a doctor.");
      valid = false;
    }

    if (!date) {
      setDateError("Please select a date.");
      valid = false;
    }

    if (!time) {
      setTimeError("Please select a time.");
      valid = false;
    }

    return valid;
  };

  const submitit = () => {
    if (validateForm()) {
      setIsModalOpen(true);
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h5 className="th">BOOK AN APPOINTMENT</h5>
      <table className="table">
        <tr className="tdflex">
          <td className="td">
            <b>Name:</b>
          </td>
          <td>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter full name"
            />
            {nameError && <p style={{ color: "red" }}>*{nameError}</p>}
          </td>
        </tr>
        <tr className="tdflex">
          <td className="td">
            <b>Age:</b>
          </td>
          <td>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
            />
            {ageError && <p style={{ color: "red" }}>*{ageError}</p>}
          </td>
        </tr>
        <tr className="tdflex">
          <td className="td">
            <b>Contact Number:</b>
          </td>
          <td>
            <input
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              placeholder="Enter Contact number"
            />
            {contactError && <p style={{ color: "red" }}>*{contactError}</p>}
          </td>
        </tr>
        <tr className="tdflex">
          <td className="td">
            <b>Gender:</b>
          </td>
          <td>
            <input
              type="radio"
              id="Male"
              name="gender"
              value="Male"
              onChange={() => setGender("Male")}
            />
            <label htmlFor="Male">Male</label>
            <input
              type="radio"
              id="Female"
              name="gender"
              value="Female"
              onChange={() => setGender("Female")}
            />
            <label htmlFor="Female">Female</label>
            <input
              type="radio"
              id="Other"
              name="gender"
              value="Other"
              onChange={() => setGender("Other")}
            />
            <label htmlFor="Other">Other</label>
            {genderError && <p style={{ color: "red" }}>*{genderError}</p>}
          </td>
        </tr>
        <tr className="tdflex">
          <td className="td">
            <b>Select a Doctor</b>
          </td>
          <td>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {selectedDoctor ? selectedDoctor : "Doctor-Department"}
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                {Doctor.map((doctor) => (
                  <a
                    key={doctor.id}
                    className="dropdown-item"
                    href="#"
                    onClick={() =>
                      handleDoctorSelection(
                        `${doctor.name} - ${doctor.Qualification.split(",")[1]}`
                      )
                    }
                  >
                    {doctor.name} - {doctor.Qualification.split(",")[1]}
                  </a>
                ))}
              </div>
            </div>
            {doctorError && <p style={{ color: "red" }}>*{doctorError}</p>}
          </td>
        </tr>
        <tr className="tdflex">
          <td className="td">
            <b>Date:</b>
          </td>
          <td>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            {dateError && <p style={{ color: "red" }}>*{dateError}</p>}
          </td>
        </tr>
        <tr className="tdflex">
          <td className="td">
            <b>Time:</b>
          </td>
          <td>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            {timeError && <p style={{ color: "red" }}>*{timeError}</p>}
          </td>
        </tr>

        <tr className="tdflex">
          <td></td>
          <td>
            <button onClick={submitit} style={{ borderRadius: "4px" }}>
              Submit
            </button>
          </td>
        </tr>
      </table>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Your appointment has been booked Thankyou</p>
            <button onClick={closeModal}>OK</button>
          </div>
        </div>
      )}
    </>
  );
}
