import React from 'react'
import productsSchema from'../Search/Cars'
import './ItemsList.css'
import * as ROUTES from './../constants/routes';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import SingleItem from './../SingleItem'
import Navbar from '../nav/Navbar';
export default function ItemList (){
    return (<>
        <Navbar/>
        <div className='row'>
        {productsSchema.map((e)=>{
            return(
                
                <div className='card'>
                <div className='card-header'>
                <h3>
                {e.model} 
                </h3>
                </div>
                <div className='card-body' style={{ backgroundImage: `url(${e.photo})` }}>
                    <p> <span>body style:</span> {e.body_style}<br/>
                    <span> price:</span> {e.price}<br/>
                   <br/></p>
                   <Link to = {`${ROUTES.SINGLE_ITEM}/${e.id}`}>
                   <button className='btn-list'> <span>More Ditels</span></button>
                   
                   </Link>
                </div>
            </div>
            )
        }) }
        </div>
        </>
      )
}
