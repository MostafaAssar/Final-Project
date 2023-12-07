import React from "react";
import './product.css'
const Product = (props) => {
    return (
      <>
        <div className="card">
  <div className="card-overlay"></div>
  <div className="card-inner">
    <h1> {props.model}</h1>
    <img src={props.photo}></img>
    <p></p>
  </div>
</div>
      </>
    );
  };
  
  export default Product;