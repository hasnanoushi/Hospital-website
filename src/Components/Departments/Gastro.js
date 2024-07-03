import React from 'react';
import gas from '../images/gas.jpg';
import d8 from '../images/d8.jpeg';
import './dept.css';

export default function Deptcontent() {
    
  function booking()
  {
    alert
    ('Go to Appointment page for Booking')}
  return (
    <div>
      <div className='row'>
        <div className='col'></div>
        <div className='col-6'> <h1 className='hi'>Gastroentrology</h1>
    Gastroentrologist at HN Hospitals diagnose and treat a wide range of heart conditions <br/>
    including coronary heart disease, Atherosclerosis, Aortic Stenosis, acquired and <br/>
    inherited arrhythmias, acquired and inherited cardiomyopathy, high blood cholesterol <br/>
    and triglycerides, heart attacks, chest pain, angina, valvular heart disease, pulmonary<br/>
     hypertension, pericarditis, peripheral vascular disease, heart failure, restrictive and<br/>
      hypertrophic cardiomyopathy, supraventricular tachycardia, ventricular tachycardia and <br/>
      congenital heart disease.<br/>
    
    The department of Gastroentrology has the best Gastroentrologist, technology, <br/>
    facilities and supportive staff who are committed to provide care encompassing <br/>
    all aspects of cardiac care – preventive, diagnostic and therapeutic. Our Gastroentrology <br/>
    department cater to all the subspecialties of Gastroentrology including diagnostic, <br/>
    interventional,non-invasive, and surgical.<br/></div> 
    <div className='col-5'><img src={gas} className='dept-img'/></div>
    
    </div><div className='spec'>
    <h1 >Our Specialist</h1>
    <div>
      <img src={d8}/>
      <h3>Dr.Muhammed Irshad</h3>
<h3>MBBS,MD in Gastroentrology</h3>
<h3>Experience:14 years</h3>
<h3>Consultation:Mon -Sat 10am to 4pm</h3>
<button onClick={booking}>BOOK NOW</button>
</div>
</div>
    </div>
  )
}
