import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import './SignUp.css';
import mail from '../assets/mail.png'
import pass from '../assets/pass.png'
import pass1 from '../assets/pass1.png'
import name1 from '../assets/name1.png'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from 'react';
export default function SignUp() {
    const navige = useNavigate();
    const [name, setName]=useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validationError, setValidationError] = useState('');
  const validateInputs = () => {
    if (!name || !email || !password || !confirmPassword) {
      setValidationError('All fields are required.');
      return false;
    }
    setValidationError('');
    return true;
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!password.match(passwordRegex)) {
      setPasswordError(
        'Password must contain at least 8 characters, including at least one digit, one lowercase letter, and one uppercase letter.'
      );
      return false;
    }
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const register = () => {
    if (!validateInputs() || !validatePassword()) {
      return;
    }

    const data = {
      name:name,
      email: email,
      password: password,
    };

    axios
      .post('http://localhost:4000/authentication/signup', data)
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          icon: 'success',
          title: 'User Registered',
          text: 'Congratulations! You have successfully registered.',
        });
        navige('/Login');
      })
      .catch((error) => {
        console.error(error);
      });
  };
    const [isHovered, setIsHovered] = useState(true); 

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };
  
 /* const  inputContainer1= {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    height: 40,
    borderColor: '#2980B9',
    borderBottomWidth: 1,
    outline: 'none',
  };*/
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

  /*const textStyle = {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginLeft: -20,
    top: 0,
  };*/
  const input = {
    width: '80%',
    borderWidth: 0,
    color: 'rgb(115, 100, 128)',
    paddingLeft: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: 'purpel',
    fontSize: 16,
    paddingBottom: 10,
    outline: 'none',
    position: 'relative',
    marginBottom: 50, 
  }; 
  return (
    <div style={{backgroundColor:"#cccccc"}}>
      <img src={Logo} alt="logo" className="animat-log1"/>
            <div
      className="card4"
      style={cardStyles}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="card4-content">
        <h2 style={{color: 'rgb(115, 100, 128)', textDecoration:"underline"}}>Sign<span  style={{color:"black"}}>Up</span></h2>
      
        <img src={name1} alt="" style={{position:'relative',
         height:"27px", width:"27px", top:"5px", right:"10px"}}/>
        <input
          style={input}
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <img src={mail} alt="" style={{position:'relative',
         height:"30px", width:"30px", top:"90px", right:"285px"}}/>
        <input
          style={input}
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
<div>
<img src={pass} alt="" style={{position:'relative',
         height:"25px", width:"25px", top:"5px", left:"-10px"}}/>
<input
          style={input}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
<img src={pass1} alt="" style={{position:'relative',
         height:"27px", width:"27px", top:"90px", right:"280px"}}/>
<input
          style={input}
          placeholder="ConfirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword (e.target.value)}
        />
        <button className='bata1' onClick={register}>
            SignUP</button>

</div>

      </div>
      </div>
      <br></br>{validationError && <div style={{ color: 'red', marginLeft: 40 }}>{validationError}</div>}
      {passwordError && <div style={{ color: 'red', marginLeft: 40 }}>{passwordError}</div>}
    </div>
  )
}
