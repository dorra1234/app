import React from 'react'
import './Clothes.css'
import 'bootstrap/dist/css/bootstrap.css';
import tshirt from "../assets/tshirt.png"
import Jean from "../assets/Jean.png"
export default function Jeux() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light"
         style={{position:"relative", left:"115px"}}>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a  className="nav-link" href="/Client">Home</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="/Cart">Cart</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
      <div  class="card" style={{width: "18rem", left:"120px"}}>
  <img src={tshirt} class="card-img-top" alt="tshirt" style={{left:"50px"}}/>
  <div class="card-body">
    <h2 class="card-text" style={{top:"210px"}}><b> <span style={{color:"#ad7e7e"}}>Pink T-shirt</span></b></h2>
    <h5 class="card-tex"><span style={{color:"#ad7e7e"}}>Quality</span>: A high-quality pink sweater in excellent condition </h5>
    <h5 class="card-te"> <span style={{color:"#ad7e7e"}}>location</span>: tunis ezzahra</h5>
    <h5 class="card-t"><span style={{color:"#ad7e7e"}}>Number</span>: 20113958 </h5>
  </div>
</div>
<div  class="card" style={{width: "18rem", left:"440px", top:"-350px"}}>
  <img src={Jean} class="card-img-top" alt="Jean" style={{left:"50px"}}/>
  <div class="card-body1">
    <h2 class="card-text" style={{top:"210px"}}><b><span style={{color:"#ad7e7e"}}>Jean</span></b></h2>
    <h5 class="card-tex"><span style={{color:"#ad7e7e"}} >Quality</span>: A high-quality Jean in excellent condition </h5>
    <h5 class="card-te"><span style={{color:"#ad7e7e"}}>location</span>: tunis el manzah6</h5>
    <h5 class="card-t"><span style={{color:"#ad7e7e"}}>Number</span>: 26711321 </h5>
  </div>
</div>
    </div>
  )
}
