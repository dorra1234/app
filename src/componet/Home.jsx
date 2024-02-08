import React from 'react'
import './Home.css'
import Logo from "../assets/Logo.png"
import donation from "../assets/donation.jpg"
import { useNavigate } from 'react-router-dom';
import charity from  "../assets/charity.jpg"
import don from "../assets/don.jpg"
export default function Home() {
    const navig = useNavigate()
  return (
    <body style={{ backgroundColor: '#EEEEEE' }}>
        <div>
        <img src={Logo} alt="logo" className="animat-log"/>
        
       <h1 className="titre">Awin Ghirk <span style={{ color: 'pink' }}></span></h1>
      
        <div className="card">
      <div className="card-content">
        <h2 >WHAT is Awin <span style={{color: 'pink'}}>Ghirk</span> services </h2>
        <p style={{position:"absolute", top:"70px"}}>When you login to Awin Ghirek you will be directed to the home page 
        where you will be able to add some products that you will donate, 
        you will find the product that are fetched for donation and if 
        you are a member of a charity association
        you can add the product needed to cart</p>
        <img style={{height:"240px",width:"240px",top:"230px"}} src={charity} alt="Card Image"  />
      </div>
      
      <div className="card3">
      <div className="card-content3">
        <h2>TO THE NEXT <span style={{color: 'pink'}}>STEP</span></h2>
        <p style={{position:"absolute", top:"70px",right:"50px"}}>Are you ready to discover our <span style={{color: 'red'}}> Server? </span></p>
        <img src={don} alt="Card Image" style={{
           position: 'absolute',
           top: 150,
           resizeMode: 'center',
           height: 150,
           width: 150,
           backgroundColor: '#fff',
           left:55,
           
        }}  /><button className="batouna"  id="loula" onClick={()=>{navig('/Login')}} > Get Started</button>
      </div>
      
    </div>

    </div>
    <div className="card1">
      <div className="card-content1">
        <h2>WHAT IS Awin <span style={{color: 'red'}}> Ghirk </span> ?</h2>
        <p style={{position:"absolute", top:"60px"}}>Awin Ghirk is an innovative
         charity Startup
     that provides userswhom are untrested in voluntary work with an online 
    plate-formwhich contains the best services ever.</p>
        <img src={donation} alt="ii Image" />
      </div>
      
    </div>
        </div>
    </body>
  )
}
