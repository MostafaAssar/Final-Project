import React, { useState } from 'react'
import './addToCard.css'
import productsSchema from './../Search/Cars'



export default function AddToCart() {
    const [items, setItems] = useState([...productsSchema.map((product) => ({ ...product }))]);
    // Function to delete items by index
    const deleteItemByIndex = (indexToDelete) => {
      const updatedItems = [...items];
      updatedItems.splice(indexToDelete, 1);
      setItems(updatedItems);
    };
    // Calculate total price
    const calculateTotalPrice = () => {
      const totalPrice = items.reduce((accumulator, item) => {
        const priceNumber = parseFloat(item.price); 
        return accumulator + priceNumber;
      }, 0);
      return totalPrice;
    };
  
    const total = calculateTotalPrice();
  
    return (
      <>
        <div className='cart'>
          <h2 className='cart_title'> Your cart </h2>
          <div className='cart_content'>
            {items.filter((e) => e.year.includes("19")).map((e, index) => {
              return (
                <div className='cart_box'>
                  <div className='details_box'>
                    <div className='cart_product_title'>{e.model}</div>
                    <div className='cart_price'>{e.price}$</div>
                    <input type='number' value={1} className='cart_quantity'></input>
                  </div>
                  {/* icons here */}
                  <button className='btn_buy' id='del' onClick={() => deleteItemByIndex(index)}>Delete</button>
                </div>
              )
            })}
          </div>
          <div className='total'>
            <div className='total_title'>Total</div>
            <div className='total_price'>{total}$</div>
          </div>
          {/* buy button */}
          <button className='btn_buy' > Buy Now</button>
          {/* cart close  icon*/}
        </div>
      </>
    )
  }
