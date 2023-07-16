import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./Password.scss"
import axios from 'axios'
import {useLocation, useNavigate} from 'react-router-dom'

const Password = () => {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const location = useLocation()
  const navigate = useNavigate()
  const userId = location.pathname.split('/')[2]
  const token = location.pathname.split('/')[3]

  useEffect(() => {
    const verified = async () =>{
      try {
        await axios.get(`http://localhost:8000/api/auth/reset-password/${userId}/${token}`)
      } catch (error) {
        alert('Session expired')
        navigate('/')
      }
    }
    verified()
  }, [])
  
   
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      if (password === confirmPassword) {
      await axios.post(`http://localhost:8000/api/auth/reset-password/${userId}/${token}`, 
      {password, confirmPassword})
      alert('Password updated')
      navigate('/login')
      } else {
        alert('Password does not match')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  
  return (
    <div className='password'>
    <Navbar />
        <form className="passContainer" onSubmit={handleSubmit}>
        <div className="wrapper">
        <h3>Update Password</h3>
            <label htmlFor="">Password</label>
            <input 
            type="password" 
            onChange={(e)=>setPassword(e.target.value)}  
            />
            <label htmlFor="">Confirm Password</label>
            <input 
            onChange={(e)=>setConfirmPassword(e.target.value)}  
            type="password" />
            <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Password