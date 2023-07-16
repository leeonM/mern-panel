import React,{useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./passwordEmail.scss"
import axios from 'axios'

const PasswordEmail = () => {
    const [email, setEmail] = useState("")
    
    
    const handleSubmit  = async (e) => {
        e.preventDefault()
        try {
        const res = await axios.post(`http://localhost:8000/api/auth/forgot-password`, {email})
        alert(res.data.msg)
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <div className='email'>
     <Navbar />
        <div className="emailContainer">
        <form className="wrapper" onSubmit={handleSubmit}>
        <h3>Forgot Password</h3>
            <label htmlFor="">Email Address</label>
            <input 
            type="email" 
            placeholder='Enter your Email Address'
            onChange={(e)=>setEmail(e.target.value)}
             />
            <button type='submit'>Send Password Reset Email</button>
        </form>
        </div>
    </div>
  )
}

export default PasswordEmail