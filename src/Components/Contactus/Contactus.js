import React from 'react';
import './Contact.css';
import geo from '../images/geo.svg';
import mail from '../images/mail.svg';
import mob from '../images/mob.svg';
import map1 from '../images/map1.avif';


export default function Contactus() {
  function submitit() {alert('Your Enquiry has been recorded.Thankyou')}
  return (
    <div className='row'>
      <div className='col-5 adress'>
        <ul className='ull'>
          <li>
          <img src={geo} className='img'/>HN Hospital<br/>
       Near Fashia Mall<br/>
       Kannur <br/><br/></li>
       <li>
       <img src={mail} className='img'/>hnhospital@gmail.com<br/><br/>
       </li>
       <li>
       <img src={mob} className='img'/>8767876722 ,
       6464789033
       </li>
          
        </ul>
      </div>
      <div className='col-7'>
      <table className='table'>
    <th className='th'>ENQUIRY</th> 
    <tr>
      <td className='td'><b>Name:</b></td>
      <td><input type='text'placeholder='Enter full name'/></td>
      <td className='td'><b>Email</b></td>
      <td><input type='email'placeholder='Enter email'/></td>
    </tr>
   
      <tr>
       <td className='td'><b>Contact Number:</b></td>
      <td><input type='text'placeholder='Enter Contact number'/></td>
      <td className='td'><b>Location</b></td>
      <td><input type='text'placeholder='Enter Location'/></td></tr>
  
    <tr>
      <td className='td'><b>Message</b></td>
      <td><textarea rows={4} cols={30}placeholder='Drop your feedback and suggestions'></textarea>  </td>
      <td><button  onClick={submitit}>SUBMIT</button></td>
      </tr>
     
     </table>
   
      </div>
      <img src={map1} className='map'></img>
    </div>
  )
}
