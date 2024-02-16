import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import './SignUp.css'
import { useState } from 'react';
export default function SignUp() {
    const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
    const navig = useNavigate();
    const [name, setName]=useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [number, setNumber]=useState('')
    const [isHovered, setIsHovered] = useState(true); 

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };
  
  const  inputContainer1= {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    height: 40,
    borderColor: '#2980B9',
    borderBottomWidth: 1,
    outline: 'none',
  };
  const cardStyles = {
    border: '2px solid black',
    borderRadius: '10px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)', 
    padding: '20px',
    backgroundColor: '#ffffff',
    maxWidth: '350px',
    height: '500px',
    position: 'absolute',
    width: '350px',
    left: '550px',
    top: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#000000',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    
  };

  const textStyle = {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginLeft: -20,
    top: 0,
  };
  const input = {
    width: '75%',
    borderWidth: 0,
    color: 'black',
    paddingLeft: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
    fontSize: 16,
    paddingBottom: 10,
    outline: 'none',
    position: 'relative',
    marginBottom: 50, 
  };
  return (
    <div style={{backgroundColor:"beige"}}>
      <img src={Logo} alt="logo" className="animat-log1"/>
            <div
      className="card4"
      style={cardStyles}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="card4-content">
        <h2 style={{color: 'rgb(115, 100, 128)'}}>Sign<span style={{color: 'rgb(115, 100, 128)'}}>Up</span></h2>
      

         
        <input
          style={input}
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
<div>
<input
          style={input}
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
<input
          style={input}
          placeholder="Number"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

<input
          style={input}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='bata' onClick={()=>{navig('/Client')}}>
            Log <span >In</span></button>
         
       

</div>
           
           

            
       
      </div>
      </div>
    </div>
  )
}
