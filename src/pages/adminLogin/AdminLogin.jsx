import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./AdminLogin.scss"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
    const res = await axios.post("http://localhost:8000/api/admin/login",{email, password})
    localStorage.setItem("currentUser", JSON.stringify(res.data))
    navigate(`/admin`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='adminLogin'>
      <Navbar loginPage={true} registerPage={true} />
      <div className="loginContainer">
        <form onSubmit={handleSubmit} className="wrapper">
          <h3>Admin Login</h3>
          <label htmlFor=''>E-mail</label>
           <input 
           type="text" 
           className="loginEmail" 
           placeholder='Enter your email' 
           onChange={(e)=>setEmail(e.target.value)} 
           />
           <label htmlFor=''>Password</label>
           <input 
           type="password" 
           className="passwordInput" 
           placeholder='Enter your password' 
           onChange={(e)=>setPassword(e.target.value)}  
           />
           <button type='submit' className="loginBtn">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login