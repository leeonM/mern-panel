import React, {useState, useEffect} from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./Admin.scss"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    const [product, setProduct] = useState({
        productName: "",
        interest: "",
        years: "",
        amount: "",
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
        setProduct(prev=>{
          return {...prev, [e.target.name]: e.target.value}
        })
      }

      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await axios.post("http://localhost:8000/api/admin/addProduct", {
            ...product,
            userEmail: product.email.toLowerCase()
          })
          alert("product added successfully") 
        } catch (error) {
          console.log(error)
        }
      }
  return (
    <div className='admin'>
        <Sidebar admin={true} settingsPage={false} account={false} />
        <div className="adminContainer">
            <div className="inputs">
                <h3>Add Product</h3>
                <form className="add" onSubmit={handleSubmit}>
                    <label htmlFor="">Product Name</label>
                    <input 
                    type="text" 
                    name="productName" 
                    onChange={handleChange}   
                    />
                    <label htmlFor="">Interest (%)</label>
                    <input type="number" 
                    name="interest" 
                    onChange={handleChange}     
                    />
                    <label htmlFor="">Years</label>
                    <input type="number" 
                     name="years" 
                     onChange={handleChange}    
                    />
                    <label htmlFor="">Type</label>
                    <input type="string" 
                     name="type" 
                     onChange={handleChange}    
                    />
                    <label htmlFor="">Amount (£)</label>
                    <input type="number" 
                     name="amount"
                     onChange={handleChange}   
                    />
                    <label htmlFor="">Customer Email</label>
                    <input type="text"
                    name="email"
                    onChange={handleChange}
                     />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Admin