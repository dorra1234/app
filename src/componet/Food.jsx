import React, { useEffect, useState } from 'react';
// import './Clothes.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import addd from '../assets/addd.png';
import axios from 'axios';

export default function Food() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await axios.get('http://localhost:4000/prod/produit');
        const allProducts1 = response.data;

        console.log('All Products:', allProducts1);

        const foodProducts = allProducts1.filter(product => product.type === 'food');

        console.log('Filtered Products:', foodProducts);

        setProducts(foodProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData1();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position:"relative", left:"115px"}}>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/Client">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/Cart">
                Cart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <img
        onClick={() => {
          navigate('/addClothes');
        }}
        src={addd}
        alt=""
        style={{ height: '50px', width: '50px', cursor: 'pointer',left:"1400px",
         position:"relative", top:"-5px"}}
      />

      <div className="row row-cols-1 row-cols-md-3 g-2">
        {products.map(product => (
          <div className="col" key={product._id}>
            <div className="card">
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
  );
}
