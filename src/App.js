import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Aboutus from "./Components/Aboutus/Aboutus";
import Contactus from "./Components/Contactus/Contactus";
import Departments from "./Components/Departments/Departments";
import Doctors from "./Components/Doctors/Doctors";
import Footer from "./Components/Footer/Footer";
import lady from "./Components/images/lady.jpeg";
import gen from "./Components/images/gen.jpeg";
import d2 from "./Components/images/d2.jpeg";
import d3 from "./Components/images/d3.jpeg";
import d5 from "./Components/images/d5.png";
import d8 from "./Components/images/d8.jpeg";
import Deptcontent from "./Components/Departments/Deptcontent";
import Booking from "./Components/Booking/Booking";
import Peadiatric from "./Components/Departments/Peadiatric";
import Gastro from "./Components/Departments/Gastro";
import Gynac from "./Components/Departments/Gynac";
import Surgery from "./Components/Departments/Surgery";
import Ent from "./Components/Departments/Ent";
import Ophthal from "./Components/Departments/Ophthal";

function App() {
  var Doctor = [
    {
      id: 1,
      name: "Dr.Sanjay Udit",
      Qualification: "MBBS,MD in Cardiology",
      Consultation: "Consultation:Mon -Sat 10am to 4pm ",
      Experience: "Experience:14 years",
      imageUrl: gen,
    },
    {
      id: 2,
      name: "Dr.Muhammed Irshad",
      Qualification: "MBBS,MD in Gastroentrology",
      Consultation: "Consultation:Mon -Sat 10am to 4pm ",
      Experience: "Experience:18 years",
      imageUrl: d8,
    },
    {
      id: 3,
      name: "Dr.Munawwar Abdulla",
      Qualification: "MBBS,MD in Ophthalmology",
      Consultation: "Consultation:Mon -Sat 10am to 4pm ",
      Experience: "Experience:24 years",
      imageUrl: d5,
    },
    {
      id: 4,
      name: "Dr.Manoj Kumar T",
      Qualification: "MBBS,MD in Peadiatrics",
      Consultation: "Consultation:Mon -Sat 10am to 4pm ",
      Experience: "Experience:14 years",
      imageUrl: d8,
    },
    {
      id: 5,
      name: "Dr.Sanjana Jain",
      Qualification: "MBBS,MD in Gynaecology",
      Consultation: "Consultation:Mon -Sat 10am to 4pm ",
      Experience: "Experience:12 years",
      imageUrl: lady,
    },
    {
      id: 6,
      name: "Dr.Ajith Menon",
      Qualification: "MBBS,MD in ENT",
      Consultation: "Consultation:Mon -Sat 10am to 4pm ",
      Experience: "Experience:14 years",
      imageUrl: gen,
    },
    {
      id: 7,
      name: "Dr.Sheela Sasidhar",
      Qualification: "MBBS,MD in Surgery",
      Consultation: "Consultation:Mon -Sat 10am to 4pm ",
      Experience: "Experience:24 years",
      imageUrl: d2,
    },
  ];

  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/dr" element={<Doctors Doctor={Doctor} />} />
        <Route path="/dept" element={<Departments />} />
        <Route path="/content" element={<Deptcontent />} />
        <Route path="/peadiatric" element={<Peadiatric />} />
        <Route path="/book" element={<Booking Doctor={Doctor} />} />
        <Route path="/gastro" element={<Gastro />} />
        <Route path="/gynac" element={<Gynac />} />
        <Route path="/ent" element={<Ent />} />
        <Route path="/surgery" element={<Surgery />} />
        <Route path="/ophthal" element={<Ophthal />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
