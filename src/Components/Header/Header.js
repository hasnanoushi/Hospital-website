import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import './Header.css';
import LOGO from '../images/LOGO.jpeg';

export default function Header() {
 
  return (<div className='bg'>
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid menu">
       <a className="navbar-brand" href="#"><img src={LOGO} className='logo'></img></a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
    
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0 navg">
       
           <li className="nav-item">
             <NavLink to="/" className="nav-link active text" aria-current="page" >Home</NavLink>
           </li>
           <li className="nav-item">
           <NavLink to="/dr" className="nav-link active text" aria-current="page" >Doctors</NavLink>
           </li>
           <li className="nav-item">
           <NavLink to="/dept" className="nav-link active text" aria-current="page" >Departments</NavLink>
           </li>
          
           <li className="nav-item">
           <NavLink to="/book" className="nav-link active text" aria-current="page" >Appointments</NavLink>
           </li>
         
           <li className="nav-item">
           <NavLink to="/contact" className="nav-link active text" aria-current="page" >Contactus</NavLink>
           </li>
         
           
         
           
           
           
         </ul>
         
       </div>
    </div>
    </nav> </div>
  )
}
