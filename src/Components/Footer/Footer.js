import React from "react";
import "./Footer.css";
import geo from "../images/geo.svg";
import mail from "../images/mail.svg";
import mob from "../images/mob.svg";

export default function Footer() {
  return (
    <div className="foot" style={{ marginLeft: "-11px", marginRight: "-24px" }}>
      <div className="row rowstyle">
        <div className="col"></div>
        <div className="col-3 listyle  ">
          <ul className="ul">
            <li>
              <a href="#" className="ula">
                About Hospital
              </a>
            </li>
            <li>
              <a href="#" className="ula">
                Book an Appointment
              </a>
            </li>
            <li>
              <a href="#" className="ula">
                Find a Doctor
              </a>
            </li>
            <li>
              <a href="#" className="ula">
                Departments
              </a>
            </li>
            <li>
              <a href="#" className="ula">
                Services
              </a>
            </li>
          </ul>
        </div>
        <div className="col-3 listyle ">
          {" "}
          <ul className="ul">
            <li>
              <a href="#" className="ula">
                Insurance
              </a>
            </li>
            <li>
              <a href="#" className="ula">
                News & Events
              </a>
            </li>
            <li>
              <a href="#" className="ula">
                Admissions
              </a>
            </li>
            <li>
              <a href="#" className="ula">
                Patients Rights
              </a>
            </li>
            <li>
              <a href="#" className="ula">
                Vaccinations
              </a>
            </li>
          </ul>
        </div>
        <div className="col-3">
          {" "}
          <ul className="ul">
            <li>
              {" "}
              <img src={geo} />
              HN Hospital
              <br />
              Near Fashia Mall
              <br />
              Kannur
            </li>
            <li className="fontli">
              <img src={mail} className="size" />
              hnhospital@gmail.com
            </li>
            <li className="fontli">
              <img src={mob} className="size" />
              8767876722
            </li>
          </ul>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
