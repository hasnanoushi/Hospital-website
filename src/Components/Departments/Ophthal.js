import React from "react";
import eye from "../images/eye.jpeg";
import d5 from "../images/d5.png";
import "./dept.css";
import { useNavigate } from "react-router-dom";
export default function Deptcontent() {
  const navigate = useNavigate();
  function bookNow() {
    navigate("/book");
  }
  return (
    <div>
      <div className="row">
        <div className="col"></div>
        <div className="col-6">
          {" "}
          <h1 className="hi">Ophthalmology</h1>
          Ophthalmologists at HN Hospitals diagnose and treat a wide range of
          heart conditions <br />
          including coronary heart disease, Atherosclerosis, Aortic Stenosis,
          acquired and <br />
          inherited arrhythmias, acquired and inherited cardiomyopathy, high
          blood cholesterol <br />
          and triglycerides, heart attacks, chest pain, angina, valvular heart
          disease, pulmonary
          <br />
          hypertension, pericarditis, peripheral vascular disease, heart
          failure, restrictive and
          <br />
          hypertrophic cardiomyopathy, supraventricular tachycardia, ventricular
          tachycardia and <br />
          congenital heart disease.
          <br />
          The department of Ophthalmology has the best Ophthalmologists,
          technology, <br />
          facilities and supportive staff who are committed to provide care
          encompassing <br />
          all aspects of cardiac care – preventive, diagnostic and therapeutic.
          Our Ophthalmology <br />
          department cater to all the subspecialties of Ophthalmology including
          diagnostic, <br />
          interventional,non-invasive, and surgical.
          <br />
        </div>
        <div className="col-5">
          <img src={eye} className="dept-img" />
        </div>
      </div>
      <div className="spec doctext">
        <h2 className="f">Our Specialist</h2>
        <div>
          <img src={d5} />
          <h4 className="f">Dr.Munawwar Abdulla</h4>
          <h4 className="f">MBBS,MD in Ophthalmology</h4>
          <h4 className="f">Experience:24 years</h4>
          <h4 className="f">Mon -Sat 10am to 4pm</h4>
          <button
            style={{ borderRadius: "4px", backgroundColor: "wheat" }}
            onClick={bookNow}
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}
