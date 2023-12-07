import React from "react";
import './product.css'
const Product = (props) => {
    return (
      <>
        <div className="card">
  <div className="card-overlay"></div>
  <div className="card-inner">
    <a href="./../SingleItem"> {props.model}</a>
    <img src={props.photo}></img>
    <p></p>
  </div>
</div>
      </>
    );
  };
  
  export default Product;