import React, {useState} from 'react'
import "./Ticker.scss"
import axios from "axios"

const Ticker = () => {
  
  return (
    <div className='ticker'>
        <input 
        type="text" 
        placeholder="Enter ticker"  
        />
        <button>Submit</button>
    </div>
  )
}

export default Ticker