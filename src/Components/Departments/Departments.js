import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import './dept.css';
import cardiology from '../images/cardiology.png';
import surgical from '../images/surgical.png';
import paediatrics from '../images/paediatrics.png';
import pregnant from '../images/pregnant.png';
import ophthal from '../images/ophthal.png';
import ent from '../images/ent.png';
import gastro from '../images/gastro.png';

export default function () {
  return (
    <div className='deptflex'>
      <div className='flexItem'>
      <NavLink to="/content" ><img src={cardiology}/><br/>
      <h5 className='depttext'>Cardiology</h5>

      </NavLink></div> <div className='flexItem'>
      <NavLink to="/peadiatric" ><img src={paediatrics}/><br/>
      <h5 className='depttext'>Peadiatrics</h5>
      </NavLink></div>
      <div className='flexItem'><NavLink to="/gastro" ><img src={gastro}/><br/>
      <h5 className='depttext'>Gastroentrology</h5>
      </NavLink></div>

      <div className='flexItem'> <NavLink to="/ophthal" ><img src={ophthal}/><br/>
      <h5 className='depttext'>Ophthalmology</h5>
      </NavLink></div>
      <div className='flexItem'> <NavLink to="/gynac" ><img src={pregnant}/><br/>
      <h5 className='depttext'>Gynaecology</h5>
      </NavLink></div>
      <div className='flexItem'><NavLink to="/ent" ><img src={ent}/><br/>
      <h5 className='depttext'>ENT</h5>
      </NavLink></div>
      <div className='flexItem'><NavLink to="/surgery" ><img src={surgical}/><br/>
      <h5 className='depttext'>Surgery</h5>
      </NavLink></div>
    </div>
  )
}

