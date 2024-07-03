import React from 'react';
import nano from '../images/nano.jpg';
import d8 from '../images/d8.jpeg';
import './dept.css';

export default function Peadiatric() {
    
  function booking()
  {
    alert
    ('Go to Appointment page for Booking')}
  return (
    <div>
      <div className='row'>
        <div className='col'></div>
        <div className='col-6'> <h1 className='hi'>Peadiatrics</h1>
    Peadiatricians at HN Hospitals diagnose and treat a wide range of heart conditions <br/>
    including coronary heart disease, Atherosclerosis, Aortic Stenosis, acquired and <br/>
    inherited arrhythmias, acquired and inherited cardiomyopathy, high blood cholesterol <br/>
    and triglycerides, heart attacks, chest pain, angina, valvular heart disease, pulmonary<br/>
     hypertension, pericarditis, peripheral vascular disease, heart failure, restrictive and<br/>
      hypertrophic cardiomyopathy, supraventricular tachycardia, ventricular tachycardia and <br/>
      congenital heart disease.<br/>
    
    The department of Peadiatrics has the best Peadiatricians, technology, <br/>
    facilities and supportive staff who are committed to provide care encompassing <br/>
    all aspects of cardiac care  preventive, diagnostic and therapeutic. Our Peadiatrics <br/>
    department cater to all the subspecialties of Peadiatrics including diagnostic, <br/>
    interventional,non-invasive, and surgical.<br/></div> 
    <div className='col-5'><img src={nano} className='dept-img'/></div>
    
    </div><div className='spec'>
    <h1 >Our Specialist</h1>
    <div>
      <img src={d8}/>
      <h3>Dr.Manojkumar T</h3>
<h3>MBBS,MD in Peadiatrics</h3>
<h3>Experience:14 years</h3>
<h3>Consultation:Mon -Sat 10am to 4pm</h3>
<button onClick={booking}>BOOK NOW</button>
</div>
</div>
    </div>
  )
}
