import React from 'react'
import './Search.css';
const Search = (props) => {
  return (
    <div className="InputContainer">
    <input  className="input" type='search' onChange={props.onChange}/>
    </div>
  )
}

export default Search