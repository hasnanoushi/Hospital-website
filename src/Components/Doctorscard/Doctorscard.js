import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import './Doctorscard.css';

const Doctorscard=(props)=> {
    console.log('props',props);
    const doc=props.doct;
function add(){
  alert('Go to APPOINTMENT page for booking')
 
}
  return (
    <div className='list'>
      <div className='card'>
      <img className='image' src={doc.imageUrl}/>
        <div className='text'><b>{doc.name}</b></div>
        <div ><b>{doc.Qualification}</b></div>
        <div ><b>{doc.Experience}</b></div>
        <div><b>{doc.Consultation}</b></div>
       <button className='button' onClick={add}>BOOK NOW</button>
    </div></div>
  )}
export default Doctorscard;
