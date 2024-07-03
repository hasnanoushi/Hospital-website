import React from 'react';
import { useState } from 'react'; 
import './Booking.css';
export default function Booking() {
   const [selectedDoctor, setSelectedDoctor] = useState(''); 

  
    const handleDoctorSelection = (doctorName) => {
      setSelectedDoctor(doctorName); 
      document.getElementById("dropdownMenuButton").classList.toggle("show"); 
    }
   function submitit() {alert('Your Appointment has been booked with our Specialist at your preferred Time.Please be on Time.Thankyou')}
  return (
   
  <table className='table'>
    <th className='th'>BOOK AN APPOINTMENT</th>
    <tr>
      <td className='td'><b>Name:</b></td>
      <td><input type='text'placeholder='Enter full name'/></td>
    </tr>
    <tr>
      <td className='td'><b>Age:</b></td>
      <td><input type='number'placeholder='Enter age'/></td></tr>
      <tr>
       <td className='td'><b>Contact Number:</b></td>
      <td><input type='text'placeholder='Enter Contact number'/></td></tr>
    <tr>
      <td className='td'><b>Gender:</b></td>
      <td><input type="radio" id="Male" name="fav_language" value="Male"/>
<label for="Male">Male</label>
<input type="radio" id="Female" name="fav_language" value="Female"/>
<label for="Female">Female</label>
<input type="radio" id="Other" name="fav_language" value="other"/>
<label for="other">other</label></td>
    </tr>
    <tr>
      <td className='td'><b>Select a Doctor</b></td>
      <td><div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" 
  aria-expanded="false">
 {selectedDoctor ? selectedDoctor : 'Doctor-Department'}
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
  <a class="dropdown-item " href="#"onClick={() => handleDoctorSelection('Dr.Sanjay Udit - Cardiology')}>Dr.Sanjay Udit - Cardiology</a>
    <a class="dropdown-item " href="#"onClick={() => handleDoctorSelection('Dr.Muhammed Irshad - Gastroentrology')}>Dr.Muhammed Irshad - Gastroentrology</a>
    <a class="dropdown-item" href="#" onClick={() => handleDoctorSelection('Dr.Manoj Kumar T- Peadiatrics')}>Dr.Manoj Kumar T- Peadiatrics</a>
    <a class="dropdown-item" href="#"onClick={() => handleDoctorSelection('Dr.Munawwar Abdulla - Ophthalmology')}>Dr.Munawwar Abdulla - Ophthalmology</a>
    <a class="dropdown-item" href="#"onClick={() => handleDoctorSelection('Dr.Sanjana Jain - Gynaecology')}>Dr.Sanjana Jain - Gynaecology</a>
    <a class="dropdown-item" href="#"onClick={() => handleDoctorSelection('Dr.Ajith Menon - ENT')}>Dr.Ajith Menon - ENT</a>
    <a class="dropdown-item" href="#"onClick={() => handleDoctorSelection('Dr.Sheela Sasidhar - Senior Surgian')}>Dr.Sheela Sasidhar - Senior Surgian</a>
  </div>
</div></td>
    </tr>
    <tr>
      <td className='td'><b>Date:</b></td>
      <td><input type='date'/></td></tr>
      <tr>
      <td className='td'><b>Time:</b></td>
      <td><input type='time'/></td></tr>
      
      <tr><td></td>
    <td>
     <button onClick={submitit}>Submit</button></td></tr>
  </table>
)

}

  
   
   


