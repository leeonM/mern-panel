import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import './OTP.scss'

const OTP = () => {
  const [code, setCode] = useState('')
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  return (
    <div className='otp'>
    <Navbar />
        <div className="container">
            <div className="wrapper">
                <h3>Enter OTP</h3>
                <input type="text" 
                 onChange={(e)=>setCode(e.target.value)}   
                />
                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default OTP