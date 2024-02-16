import React from 'react';
import './SideBar.css';
import ferme from '../assets/ferme.png'
import { useNavigate } from 'react-router-dom';
export default function SideBar({ isOpen, toggleSidebar }) {
    const navige=useNavigate()
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <img className="meenu" src={ferme} alt='menu' onClick={toggleSidebar}/>
       
      <ul>
        <li  >categories:</li>
        <li onClick={()=>{navige('/Homme')}}>Jeans</li>
      
      </ul>
    </div>
  )
}