import React from "react";

import ICU from "../images/ICU.png";
import ambulance_car from "../images/ambulance_car.png";
import bloodbank from "../images/bloodbank.png";
import pharmacy from "../images/pharmacy.png";
import operationtheatre from "../images/operationtheatre.png";
import lab from "../images/lab.png";
import dial from "../images/dial.png";
import emergency from "../images/emergency.png";
import "./Home.css";
import hoq from "../images/hoq.jpg";
import hos2 from "../images/hos2.jpg";
import web1 from "../images/web1.webp";
import web2 from "../images/web2.webp";

export default function Home() {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img className="d-block w-100 imag  " src={hoq} alt="First slide" />
          </div>
          <div class="carousel-item ">
            <img className="d-block w-100 imag" src={hos2} alt="Second slide" />
          </div>
          <div class="carousel-item ">
            <img className="d-block w-100 imag" src={web1} alt="Third slide" />
          </div>
          <div class="carousel-item ">
            <img className="d-block w-100 imag" src={web2} alt="Forth slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>{" "}
      <h1 className="serv-head">OUR SERVICES</h1>
      <div className="serviceList">
        <div className="service">
          <img src={ICU} className="icon" />
          <h3 className="hd">ICU</h3>
          Our ICU services are at the core of <br />
          many our life saving treatments.
          <br /> Patients are monitored round the clock in <br />
          sterile, infection safe environments.
        </div>
        <div className="service">
          <img src={ambulance_car} className="icon" />
          <h3 className="hd">Ambulance</h3>
          Our critical care ambulances provide <br />
          timely and quality pre-hospital
          <br />
          emergency care/interhospital
          <br />
          transfer for serious and injured patients.
        </div>
        <div className="service">
          <img src={bloodbank} className="icon" />
          <h3 className="hd">Blood bank</h3>
          A fully fledged blood bank (whole <br />
          blood and blood components) <br />
          working round the clock to serve you <br />
          in your time of need
        </div>
        <div className="service">
          <img src={pharmacy} className="icon" />
          <h3 className="hd"> Pharmacy</h3>
          Available round the clock our <br />
          Pharmacy is well stocked with <br />
          medicines, manned by competent <br />
          staff with computerized system.
        </div>
        <div className="service">
          <img src={operationtheatre} className="icon" />
          <h3 className="hd"> Operation Theatre</h3>
          Our OT complex is designed to work <br />
          round the clock. State-of-the-art <br />
          facilities make it possible to perform
          <br />
          all basic as well as advanced Laparoscopic <br />
          surgeries with almost zero risk.
        </div>
        <div className="service">
          <img src={lab} className="icon" />
          <h3 className="hd"> Laboratory</h3>
          Our fully equipped labs help doctors
          <br />
          and specialists to administer <br />
          based evidence based treatments
          <br />
          to ensure the best outcomes.
        </div>
        <div className="service">
          <img src={emergency} className="icon" />
          <h3 className="hd"> Emergency </h3>
          Our fully equipped labs help doctors
          <br />
          and specialists to administer <br />
          based evidence based treatments
          <br />
          to ensure the best outcomes.
        </div>
        <div className="service">
          <img src={dial} className="icon" />
          <h3 className="hd"> HeamoDialysis</h3>
          Our fully equipped labs help doctors
          <br />
          and specialists to administer <br />
          based evidence based treatments
          <br />
          to ensure the best outcomes.
        </div>
      </div>
    </>
  );
}
