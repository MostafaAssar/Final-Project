import style from './style.css';
import React from 'react';
import productsSchema from './../Search/Cars';

export default function SingleItem(itemid) {
    console.log(itemid)
  return (<>
    <br></br>
    {productsSchema.filter((e)=>{
        return(  
            e.id.includes(itemid.id)
        )
    }).map((e)=>{
        return(
            <>
            
            <div className='itemPhoto'><img src={e.photo}></img><br/></div>
           
            <div className='model'>
            <h1>
           <p>{e.model} {e.year}</p>
           </h1>
           <h2>{e.body_style}</h2>
           </div>
           <div className='body'>
            <ul>
                <li>
                HorsePower : {e.housepower}<br/>
                 Cylinders: {e.cyliinders}<br/>
                 Weight: {e.weight}<br/>
                Top speed: {e.topspeed}<br/>
                color: {e.colors}<br/>
                </li>
            </ul>
           <div className='butt'>
           <button> <span>Book<br/>{e.price}</span></button>
           </div>
           </div>
           <br/>

           </>
        )
    }) }
    </>
  )
    }