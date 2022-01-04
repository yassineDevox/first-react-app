import React from 'react'

export default function Friend() {
   
    let isOnline = true

    //if(isOnline==true)
    //return <p> Online </p>
    
    //return <p> Offline </p>

     
    //return  isOnline ? <p>Online</p> : <p>Offine</p>

    return  <p> {isOnline ? "online":"offline"} </p>
    
}
