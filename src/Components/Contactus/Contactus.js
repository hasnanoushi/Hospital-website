import React, { useState } from "react";
import "./Contact.css";
import geo from "../images/geo.svg";
import mail from "../images/mail.svg";
import mob from "../images/mob.svg";
import map1 from "../images/map1.avif";

import contactus from "../images/contactus.jpg";

export default function Contactus() {
  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/search/HN+Hospital,+Near+Fashia+Mall+Kannur",
      "_blank"
    );
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:hnhospital@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+918767876722";
  };

  return (
    <>
      <div className="divflex" onClick={handleMapClick}>
        <img src={geo} alt="location" />
        HN Hospital <br />
        Near Fashia Mall Kannur
      </div>

      <div className="divflex" onClick={handleEmailClick}>
        <img src={mail} alt="email" />
        hnhospital@gmail.com
      </div>

      <div className="divflex" onClick={handlePhoneClick}>
        <img src={mob} alt="phone" />
        8767876722
      </div>

      <img src={map1} className="map" alt="map" onClick={handleMapClick} />
    </>
  );
}
