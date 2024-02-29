import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import addd from '../assets/addd.png';
import 'bootstrap/dist/css/bootstrap.css';
export default function Tshirt() {
  const navigate = useNavigate();
  const [prod, setProd] = useState([]);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const response = await axios.get('http://localhost:4000/prod/produit');
        const allProducts2 = response.data;

        console.log('All Products:', allProducts2);

        const clothesProducts2 = allProducts2.filter((produit) => produit.type === 'blood');

        console.log('Filtered Products:', clothesProducts2);

        setProd(clothesProducts2);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData2();
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
        style={{ height: '50px', width: '50px', position: 'relative', left: '1400px', top: '-50px', cursor: 'pointer' }}
      />
     <div class="card mb-3" style={{maxWidth:"540px"}}>
{prod.map((product)=>
  <div class="row g-0" key={product._id}>
    <div class="col-md-4">
      <img src={product.image}  class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" >Quality: {product.quality}</h5>
        <p class="card-text">Location: {product.location}</p>
        <p class="card-text"><small class="text-muted">{product.number}</small></p>
      </div>
    </div>
  </div>
)}
</div>
    </div>
  );
}
