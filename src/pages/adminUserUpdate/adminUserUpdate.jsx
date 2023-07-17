import React, {useState, useEffect} from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./Admin.scss"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const AdminUserUpdate = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    const [user, setUser] = useState({
        fName: "",
        lName: "",
        address: "",
        postcode: "",
        phone: "",
        accountNumber: "",
        sortCode: "",
        email: "",
      })

      const navigate = useNavigate()

      useEffect(() => {
        if (!currentUser){
          navigate('/adminlogin')
        }
      }, [currentUser])
      

      const handleChange = (e) => {
        e.preventDefault()
        setUser(prev=>{
          return {...prev, [e.target.name]: e.target.value}
        })
      }

      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await axios.put(process.env.REACT_APP_SERVER_URL+"admin/updateUser", {
            ...user,
            email: user.email.toLowerCase(),
            fName: user.fName.charAt(0).toUpperCase() + user.fName.slice(1),
            lName: user.lName.charAt(0).toUpperCase() + user.lName.slice(1),
            postcode: user.postcode.toUpperCase()
          })
          alert("user updated successfully") 
        } catch (error) {
          console.log(error)
        }
      }
  return (
    <div className='admin'>
        <Sidebar admin={true} settingsPage={false} account={false} />
        <div className="adminContainer">
            <div className="inputs">
                <h3>User Update</h3>
                <form className="add" onSubmit={handleSubmit}>
                <label htmlFor="">Customer Email</label>
                    <input type="text"
                    name="email"
                    onChange={handleChange}
                     />
                    <label htmlFor="">First Name</label>
                    <input 
                    type="text" 
                    name="fName" 
                    onChange={handleChange}   
                    />
                    <label htmlFor="">Last Name</label>
                    <input type="text" 
                    name="lName" 
                    onChange={handleChange}     
                    />
                    <label htmlFor="">Address</label>
                    <input type="text" 
                     name="address" 
                     onChange={handleChange}    
                    />
                    <label htmlFor="">Postcode</label>
                    <input type="string" 
                     name="postcode" 
                     onChange={handleChange}    
                    />
                    <label htmlFor="">Phone</label>
                    <input type="text" 
                     name="phone"
                     onChange={handleChange}   
                    />
                    <label htmlFor="">Account Number</label>
                    <input type="text" 
                     name="accountNumber"
                     onChange={handleChange}   
                    />
                    <label htmlFor="">Sort Code</label>
                    <input type="text" 
                     name="sortCode"
                     onChange={handleChange}   
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminUserUpdate