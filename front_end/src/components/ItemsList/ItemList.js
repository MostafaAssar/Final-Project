import React from 'react'
import productsSchema from'../Search/Cars'
import './ItemsList.css'
export default function ItemList (){
    console.log("gg")
    
    return (<>
    
        <br></br>
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
                   <button> <span>More Ditels</span></button>
                </div>
            </div>
            )
        }) }
        </div>
        </>
      )
}
