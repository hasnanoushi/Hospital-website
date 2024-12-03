import React from "react";
import cardiac from "../images/cardiac.jpg";
import gen from "../images/gen.jpeg";
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
          <h1 className="hi">Cardiology</h1>
          Cardiologists at HN Hospitals diagnose and treat a wide range of heart
          conditions <br />
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
          The department of cardiology has the best cardiologists, technology,{" "}
          <br />
          facilities and supportive staff who are committed to provide care
          encompassing <br />
          all aspects of cardiac care – preventive, diagnostic and therapeutic.
          Our cardiology <br />
          department cater to all the subspecialties of cardiology including
          diagnostic, <br />
          interventional,non-invasive, and surgical.
          <br />
        </div>

        <div className="col-5">
          <img src={cardiac} className="dept-img" />
        </div>
      </div>

      <div className="spec doctext">
        <h2 className="f">Our Specialist</h2>
        <div>
          <img src={gen} />
          <h4 className="f">Dr.Sanjay Udit</h4>
          <h4 className="f">MBBS,MD in Cardiology</h4>
          <h4 className="f">Experience:14 years</h4>
          <h4 className="f">Mon -Sat 10am to 4pm</h4>
          <button
            onClick={bookNow}
            style={{ borderRadius: "4px", backgroundColor: "wheat" }}
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}
