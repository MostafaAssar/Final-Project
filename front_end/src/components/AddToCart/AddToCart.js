import React, { useState } from 'react'
import './addToCard.css'
import productsSchema from './../Search/Cars'



export default function AddToCart(){

    return(
        <>
        <div className='cart'>
            <h2 className='cart_title'> Your cart </h2>
            <div className='cart_content'>
            {productsSchema.filter((e)=>{
                 return e.id.includes('1')
            }).map((e)=>{
                return(
            <div className='cart_box'>
            <div className='details_box'>
                <div className='cart_product_title'>{e.model}</div>
                <div className='cart_price'>{e.price}</div>
                <input type='number' value={1}  className='cart_quantity'></input>
            </div>
            {/* icons here */}
            <button className='btn_buy' id ='del'  >  Delete</button>
        </div>
                )
        })}
                
            </div>
            <div className='total'>
                <div className='total_title'>total</div>
                <div className='total_price'></div>
            </div>
            {/* buy button */}
            <button className='btn_buy'> Buy Now</button>
            {/* cart close  icon*/}
        </div>
        </>
    )
}
