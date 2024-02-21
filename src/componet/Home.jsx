import React from 'react'
import './Home.css'
import Logo from "../assets/Logo.png"
import donation from "../assets/donation.jpg"
import love from "../assets/love.png"
import { useNavigate } from 'react-router-dom';
import charity from  "../assets/charity.jpg"
import 'bootstrap/dist/css/bootstrap.css';


export default function Home() {
  const navig = useNavigate()
  
  return (

        <div style={{ backgroundColor: '#EEEEEE' }}>
          
           {/* logo */}
          <img src={Logo} alt="" style={{position:"relative",top:"0px",height:"150px",width:"150px"}}/>
          {/*first card */}
          <div class="card" style={{width: "360px",height:"450px",position:"relative",left:"20px",top:"10px"}}>
  <img src={charity} class="card-img-top" alt="..." style={{width:"150px",height:"150px",borderRadius:"50%"}}/>
  <div class="card-body">
    <h5 class="card-title">What is Awin ghirk?</h5>
    <p class="card-text">Awin Ghirk is an innovative
         charity Startup
     that provides userswhom are untrested in voluntary work with an online 
    plate-formwhich contains the best services ever.  </p>
   
  </div>
</div>
<h1 style={{position:"relative",top:"-550px",left:"650px",color:"purple"}}> Awin ghirk</h1>
       {/*second card */}
       <div class="card" style={{width: "360px",height:"450px",position:"relative",left:"550px",top:"-490px"}}>
  <img src={donation} class="card-img-top" alt="..."  style={{width:"150px",height:"150px",borderRadius:"50%"}}/>
  <div class="card-body">
    <h5 class="card-title">WHAT is Awin ghirk services?</h5>
    <p class="card-text">When you login to Awin Ghirek you will be directed to the home page 
        where you will be able to add some products that you will donate, 
        you will find the product that are fetched for donation and if 
        you are a member of a charity association
        you can add the product needed to cart</p>
   
  </div>
</div>
       {/* third card*/}
       <div class="card" style={{width: "360px",height:"450px",position:"relative",left:"1050px",top:"-940px"}}>
  <img src={love} class="card-img-top" alt="..." style={{width:"150px",height:"150px",borderRadius:"50%"}}/>
  <div class="card-body">
    <h5 class="card-title">TO THE NEXT STEP</h5>
    <p class="card-text">Are you ready to discover our Server?</p>
    <button className='bata' onClick={()=>{navig('/Login')}}>
            Get <span >Started</span></button>
  </div>
</div>
        </div>
  )
  }
 