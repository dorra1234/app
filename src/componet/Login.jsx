import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import mail from '../assets/mail.png'
import Logo from '../assets/Logo.png';
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import pass from '../assets/pass.png'
import axios from 'axios';
import Swal from 'sweetalert2';
export default function Login() {
   
        const navigate = useNavigate();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [passwordError, setPasswordError] = useState('');
        const [isHovered, setIsHovered] = useState(true); 
    
        const validatePassword = () => {
          const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
          if (!password.match(passwordRegex)) {
            setPasswordError(
              'Password must contain at least 8 characters, including at least one digit, one lowercase letter, and one uppercase letter.'
            );
            return false; // Return false to indicate validation failure
          }
          setPasswordError('');
          return true;
        };
         const validateEmail = () => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return email.match(emailRegex);
        };
      
        const loginFun = () => {
          console.log('loginFun called')
          console.log('Login button clicked');
          if (!email || !password) {
            Swal.fire({
              icon: 'error',
              title: 'Empty Fields',
              text: 'Please fill in all fields',
            });
            return;
          }
      
          if (!validateEmail()) {
            Swal.fire({
              icon: 'error',
              title: 'Invalid Email',
              text: 'Please enter a valid email address',
            });
            return;
          }
          try {
            if (!validatePassword()) {
              // Display an error message when password validation fails
              Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'Password must contain at least 8 characters, including at least one digit, one lowercase letter, and one uppercase letter.',
              });
              return;
            }
          } catch (error) {
            console.error('Error in validatePassword:', error);
            return;
          }
           
      
          const data = {
            email: email,
            password: password,
          };
          console.log(data);
          axios
            .post('http://localhost:4000/authentication/login', data)
            .then((response) => {
              console.log(response.data);
              if (response.data.password === 'false') {
                Swal.fire({
                  icon: 'error',
                  title: 'Invalid Password',
                  text: 'Please enter a valid password',
                });
              } else {
                navigate('/Client');
              }
            })
            .catch((error) => {
              console.error(error);
            });
        };


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
        color: 'black',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        
      };
    
      
      const input = {
        width: '90%',
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
      <img src={Logo} alt="logo" className="logo"/>
            <div
      className="card4"
      style={cardStyles}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="card4-content">
        <h2 className='log' >LOG <span style={{color:"black"}}>IN</span></h2>
      
        <img src={mail} alt="" style={{position:'relative',
         height:"30px", width:"30px", top:"35px", left:"-115px"}}/>
         
        <input className='put'
          style={input}
          placeholder="Email ID"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
<div>
<img src={pass} alt="" style={{position:'relative',
         height:"30px", width:"30px", top:"35px", left:"-115px"}}/>
<input
          style={input}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <br />
         {passwordError && (
        <div style={{ color: 'red', marginLeft: 40 }}>{passwordError}</div>
      )}
       

</div>
           
           <button className='bata' onClick={loginFun}>
            Log <span >In</span></button>

<p style={{position:'relative', top:"40px"}}>New to the App?
   <Link className='register-link' to='/Sign'>Register</Link></p>
       
      </div>
      </div>
    </div>
  )
}
