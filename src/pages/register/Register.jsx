import React,{useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./Register.scss"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [user, setUser] = useState({
        fName: "",
        lName: "",
        address: "",
        postCode: "",
        phone: "",
        accountNumber: "",
        sortCode: "",
        email: "",
        password: "",
        confirmPassword: ""
      })
  const navigate = useNavigate()

  const handleChange = (e) => {
        e.preventDefault()
        setUser(prev=>{
          return {...prev, [e.target.name]: e.target.value}
        })
      }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      if (user.password === user.confirmPassword) {
      await axios.post(process.env.REACT_APP_SERVER_URL+"auth/register", 
      {
        ...user,
        email: user.email.toLowerCase(),
        fName: user.fName.charAt(0).toUpperCase() + user.fName.slice(1),
        lName: user.lName.charAt(0).toUpperCase() + user.lName.slice(1),
        postcode: user.postcode.toUpperCase()
      })
      alert('Account created successfully')
      navigate('/login')
      } else if (response.status === 404) {
        alert(response.data)
      } else {
        alert('Password does not match')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='register'>
      <Navbar loginPage={false} registerPage={true} />
      <div className="registerContainer">
        <form className="wrapper" onSubmit={handleSubmit}>
          <h3>Register</h3>
          <label htmlFor=''>E-mail</label>
           <input 
           type="text" 
           className="registerEmail" 
           placeholder='Enter your email' 
           name='email'
           onChange={handleChange} 
           required={true} 
           />
           <label htmlFor=''>Password</label>
           <input 
           type="password" 
           className="passwordInput" 
           placeholder='Enter your password' 
           onChange={handleChange} 
           required={true}  
           minLength={6}
           name='password'
           />
           <label htmlFor=''>Confirm Password</label>
           <input 
           type="password" 
           className="passwordInput" 
           placeholder='Confirm your password' 
           onChange={handleChange}
           required={true} 
           minLength={6}
           name='confirmPassword'
           />
           <label htmlFor="">First Name</label>
                    <input 
                    type="text" 
                    name="fName" 
                    placeholder='First Name' 
                    onChange={handleChange}   
                    />
                    <label htmlFor="">Last Name</label>
                    <input type="text" 
                    name="lName" 
                    placeholder='Last Name' 
                    onChange={handleChange}     
                    />
                    <label htmlFor="">Address</label>
                    <input type="text" 
                     name="address" 
                     placeholder='Address' 
                     onChange={handleChange}    
                    />
                    <label htmlFor="">Postcode</label>
                    <input type="string" 
                     name="postcode" 
                     placeholder='Post Code' 
                     onChange={handleChange}    
                    />
                    <label htmlFor="">Phone</label>
                    <input type="text" 
                     name="phone"
                     placeholder='079123456' 
                     onChange={handleChange}   
                    />
                    <label htmlFor="">Account Number</label>
                    <input type="text" 
                     name="accountNumber"
                     placeholder='Enter 8 digit Account Number' 
                     onChange={handleChange}   
                    />
                    <label htmlFor="">Sort Code</label>
                    <input type="text" 
                     name="sortCode"
                     placeholder='Enter 6 digit sort code' 
                     onChange={handleChange}   
                    />
           <button type='submit' className="registerBtn">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
