import React from "react";
import { useNavigate } from "react-router-dom";
import "./Doctorscard.css";

const Doctorscard = (props) => {
  const doc = props.doct;
  const navigate = useNavigate();
  function bookNow() {
    navigate("/book");
  }

  return (
    <div className="list">
      <div className="card">
        <img className="image" src={doc.imageUrl} />
        <div className="text">{doc.name}</div>
        <div className="text">{doc.Qualification}</div>
        <div className="textit">{doc.Experience}</div>
        <div className="textit">{doc.Consultation}</div>
        <button className="button" onClick={bookNow}>
          BOOK NOW
        </button>
      </div>
    </div>
  );
};
export default Doctorscard;
