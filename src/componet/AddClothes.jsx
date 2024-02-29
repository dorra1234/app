import React, { useState } from 'react';
import add1 from "../assets/add1.png";
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function AddClothes() {

  const navigate = useNavigate();
  const [type, setType]=useState('')
  const [image, setImage]=useState('')
  const [quality, setQuality]=useState('')
  const [location, setLocation]=useState('')
  const [number, setNumber]=useState()
  
  const handleAddArticle = async () => {
    try {
      const articleData = { type, image, quality, location, number };
      await axios.post('http://localhost:4000/add/addProduit', articleData, {
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      Swal.fire({
        icon: 'success',
        title: 'Product Added!',
        text: 'Your product has been added successfully.',
      });
      navigate('/Client')
      console.log('Article added successfully!');
    } catch (error) {
      console.error('Error adding article:', error);
    }
  };
  
  return (
    <div>
      <img src={add1} alt="" style={{ height: "40px", width: "40px", position: "relative", top: "45px", left: "550px", color: "#dd93aa" }} />
      <h1 style={{ position: "relative", left: "620px", color: "#dd93aa" }}>Add an article</h1>
      <div style={{ backgroundColor: 'beige', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: "500px ", left: "470px", position: "relative", top: "50px", height: "450px" }}>
        <h1 style={{ top: "-35px", position: "relative" }}>Describe your article!</h1>
        <h6 style={{ top: "-40px", position: "relative", color: "red" }}>Fill in all the fields</h6>
        <label htmlFor="" style={{ position: "relative", top: "-35px", right: "150px" }}><b>Type:</b> </label>
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Type" style={{ position: "relative", top: "-60px" }} />
        <label htmlFor="" style={{ position: "relative", top: "-40px", right: "150px" }}><b>Image:</b> </label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image link" style={{ position: "relative", top: "-65px" }} />
        <label htmlFor="" style={{ position: "relative", top: "-30px", right: "150px" }}><b>Quality:</b></label>
        <input type="text" value={quality} onChange={(e) => setQuality(e.target.value)} placeholder="Quality" style={{ position: "relative", top: "-55px" }} />
        <label htmlFor="" style={{ position: "relative", top: "-20px", right: "150px" }}><b>Location:</b></label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="location" style={{ position: "relative", top: "-45px" }} />
        <label htmlFor="" style={{ position: "relative", top: "-20px", right: "150px" }}><b>Number:</b></label>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Phone number" style={{ position: "relative", top: "-40px" }} />
        <button type="button" className="btn btn-danger" style={{ backgroundColor: "pink" }} onClick={handleAddArticle}>
          Add Article
        </button>
      </div>
    </div>
  );
}
