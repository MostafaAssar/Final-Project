
import React, { useState } from 'react';
 const Admin =()=>{
     const [users, setusers]= useState([{name:'mo',id :"5"},{}]);
     const deleteuser =(userId) => {
        const updateusers = users.filter((user)=> user.id !== userId)
        setusers(updateusers);
     }
    return(
        <>
         {users.map(user => (
        <div key={user.id}>
          <span>{user.name}</span>
          <button onClick={() => deleteuser(user.id)}>Delete</button>
        </div>
      ))}
        </>
    )
 }
 export default Admin;