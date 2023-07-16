import React,{useEffect} from 'react'
import "./Settings.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  
  const navigate = useNavigate()

  useEffect(() => {
        if (!currentUser){
          navigate('/login')
        }
      }, [currentUser])

  return (
    <div className='settings'>
        <Sidebar admin={false} settingsPage={true} user={currentUser} account={true} />
        <div className="settingsContainer">
        <hr />
            <div className="userDetails">
            <h3>User Details</h3>
                <p className='name'><strong>Name:</strong> {currentUser?.fName} {currentUser?.lName}</p>
                <p className='Address'><strong>Address:</strong> {currentUser?.address}</p>
                <p className='postcode'><strong>Postcode:</strong> {currentUser?.postcode}</p>
                <p className='email'><strong>E-Mail:</strong> {currentUser.email}</p>
                <p className='phone'><strong>Phone:</strong> {currentUser?.phone}</p>
                <p className='account'><strong>Account Number:</strong> {currentUser?.accountNumber}</p>
                <p className='account'><strong>Sort Code:</strong> {currentUser?.sortCode}</p>
            </div>
            <hr className='hrContact' />
            <div className="contact">
                <p className='contactText'>For security reasons to update your contact information or any other 
                details please contact your account manager, or reach out to us at company@email.com / 0208 000 0000</p>
            </div>
        </div>
    </div>
  )
}

export default Settings