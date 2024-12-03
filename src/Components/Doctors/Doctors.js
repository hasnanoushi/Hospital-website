import Doctorscard from "../Doctorscard/Doctorscard";
import "../Doctorscard/Doctorscard.css";
const Doctors = (props) => {
  const Doc = props.Doctor;

  return (
    <div className="list">
      {Doc.map((d) => {
        return <Doctorscard doct={d} />;
      })}
    </div>
  );
};
export default Doctors;
