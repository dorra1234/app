import { useState } from "react";
import Logo from "../assets/Logo.png"
import Select from 'react-select';  
import Jeans from "../assets/Jeans.jpg"
import 'bootstrap/dist/css/bootstrap.css';
import './Client.css'
export default function Client() {
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
    <div className="ba" style={{ backgroundImage: `url('${require('../assets/don.jpg').default}')`}}>
      <h1> Awin Ghirk </h1>
      <h2> Categories : </h2>
      <img src={Logo} alt="logo" className="animat-log"/>
    
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
  <button style={{backgroundColor:"pink"}} type="button" class="btn btn-danger">Jeans</button>
  <button style={{backgroundColor:"pink"}} type="button" class="btn btn-warning">T-shirts</button>
  <button style={{backgroundColor:"pink"}} type="button" class="btn btn-success">Shoes</button>
  <button style={{backgroundColor:"pink"}} type="button" class="btn btn-success">Fashion Accessoires</button>
  <button style={{backgroundColor:"pink"}} type="button" class="btn btn-success">School supplies</button>
  <button style={{backgroundColor:"pink"}} type="button" class="btn btn-success">Games</button>
  <button style={{backgroundColor:"pink"}} type="button" class="btn btn-success">Music instrument</button>
  <button style={{backgroundColor:"pink"}} type="button" class="btn btn-success">Eating</button>
</div>
<div class="dropup-center dropup">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Centered dropup
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
</div>

    </div>
  );
}
