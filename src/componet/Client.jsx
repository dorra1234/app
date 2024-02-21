import React, { useState, useEffect } from 'react';
import Logo from "../assets/Logo.png"
import { useNavigate } from 'react-router-dom';
import SideBar from "./SideBar";
import menu from '../assets/menu.png'
import 'bootstrap/dist/css/bootstrap.css';
import './Client.css'
import Food from '../assets/Food.jpg'
import Blood from '../assets/Blood.jpg'
import Leisure from '../assets/Leisure.jpg'
import Clothes from '../assets/Clothes.jpg'

export default function Client() {
  const navig = useNavigate()
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const customStyles = {
    control: (provided) => ({
      ...provided,
      height: '50px',
      left:'200px',
      right:'500px',
      width: '130px',
      top:'-230px',
      marginBottom:  20,
      borderBottomWidth:  1,
      borderColor: '#D31919',
      borderWidth:  0,
    }),
    option: (provided, state) => ({
      ...provided,
      color: 'black', 
      padding: '10px',
      width:"130px" 
      
    }),
    
  };
 return (

    <div>
      <br/>
      <h2 style={{position:"relative",left:"400px",top:"30px",color:"purple"}}> No act of kindness, no matter how small, is ever wasted. </h2>
      <img src={Logo} alt="logo" className="animat-log"/>
      <img src={menu} alt='menu' className='menu'  onClick={toggleSidebar}/>
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>

      <div onClick={()=>{navig('/Clothes')}} className="custom-box">
      <h2 style={{position:"relative", left:"100px",  }}>Clothes</h2>
      <img style={{position:"relative",left:"15px",height:"150px"}} className='loula' src={Clothes} alt="Clothes"/>
<p> Engage in our community's mission to clothe those in need. Our clothing drive initiatives aim to provide warmth and dignity to individuals facing challenges. By volunteering your time or donating gently used clothes, you contribute to a brighter and more comfortable future for someone less fortunate. Together, we can dress the world with kindness.</p>
      
    </div>
    <div   onClick={()=>{navig('/Leisure')}} className="custom-boxx">
      <h2 style={{position:"relative", left:"100px",  }}>Leisure</h2>
      <img style={{position:"relative",left:"15px",height:"150px",top:'-20px'}} className='loula' src={Leisure} alt="Leisure"/> 
      <p style={{position:"relative",top:'-22px'}}> Embrace the joy of giving back by joining our leisure-focused volunteer programs. Whether it's organizing recreational activities for local communities or assisting in events that promote a healthy lifestyle, your involvement makes a significant impact. Together, we create spaces where individuals can enjoy moments of happiness and well-being, fostering a sense of togetherness through shared leisure activities.</p>
      </div>

      <div  onClick={()=>{navig('/Food')}} className="custom-boxxx">
      <h2 style={{position:"relative", left:"100px",  }}>Food</h2> 
      <img style={{position:"relative",left:"15px",height:"150px"}} className='loula' src={Food} alt="Food"/> 
      <p style={{position:"relative",top:'-22px'}}> Take part in our mission to alleviate hunger and nourish souls. Through food-related volunteer opportunities, you can make a direct impact on those facing food insecurity. Whether it's helping at a local food bank, organizing community meals, or contributing to sustainable agriculture projects, your involvement ensures that no one in our community goes to bed hungry. Join us in cultivating a culture of generosity and sustenance.</p>
      </div>

      <div  onClick={()=>{navig('/Blood')}} className="custom-boxxxx">
      <h2 style={{position:"relative", left:"100px",  }}>Blood</h2> 
      <img style={{position:"relative",left:"50px",height:"150px"}} className='loula' src={Blood} alt="Blood"/> 
      <p > Save lives by participating in our blood donation drives. Your voluntary contribution can make a vital difference for those in medical need. Blood donations are a lifeline in emergencies and essential for various medical treatments. By giving the gift of life, you become a hero in someone's story. Join our blood donation efforts and be a crucial part of our community's health and well-being.

</p>
      </div>

    </div>

    
  );
}
