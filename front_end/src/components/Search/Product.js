import React from "react";
import * as ROUTES from './../constants/routes';
import {Link} from 'react-router-dom'
const Product = (props) => {
    return (
      <>
  <div >
  <Link to = {`${ROUTES.SINGLE_ITEM}/${props.id}`}> {props.model}</Link>
  </div>
      </>
    );
  };
  
  export default Product;