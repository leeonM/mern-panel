import React,{useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./Login.scss"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
    const res = await axios.post(process.env.REACT_APP_SERVER_URL+"auth/login",{email, password})
    localStorage.setItem("currentUser", JSON.stringify(res.data))
    navigate(`/account/${res.data._id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='login'>
      <Navbar loginPage={true} registerPage={false} />
      <div className="loginContainer">
        <form className="wrapper" onSubmit={handleSubmit}>
          <h3>Login</h3>
          <label htmlFor=''>E-mail</label>
           <input 
           type="email" 
           className="loginEmail" 
           placeholder='Enter your email'
           onChange={(e)=>setEmail(e.target.value)}
           required={true}  
            />
           <label htmlFor=''>Password</label>
           <input 
           type="password" 
           className="passwordInput" 
           placeholder='Enter your password' 
           onChange={(e)=>setPassword(e.target.value)}
           required={true}  
           minLength={6}
           />
           <button type='submit' className="loginBtn">Login</button>
           <Link to="/forgot-password" style={{textDecoration: "none"}}><p>Forgotten your login details?</p></Link>
        </form>
      </div>
    </div>
  )
}

export default Login