
import './Clothes.css'
import 'bootstrap/dist/css/bootstrap.css';
import del from '../assets/del.png'
import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import addd from "../assets/addd.png"
import axios from 'axios';
export default function Clothes() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:4000/prod/produit');
      const allProducts = response.data;

      const clothesProducts = allProducts.filter((product) => product.type === 'clothes');

      setProducts(clothesProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData])
  return (
    <div >
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
    <img onClick={()=>{navigate('/addClothes')}} src={addd} alt="" style={{height:"50px", width:"50px",position:"relative",
     left:"1400px", top:"-50px",cursor:"pointer"
     }}/>
    <div className="row row-cols-1 row-cols-md-3 g-2">
        {products.map(product => (
          <div className="col" key={product.id}>
          <div className="card" style={{top:"20px",left:"150px", width:"280px"}}>
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="Qu">Quality: {product.quality}</h5>
                <p className="lo">Location: {product.location}</p>
                <p className="nu">Number: {product.number}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  )
}
