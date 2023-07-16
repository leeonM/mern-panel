import "./Sidebar.scss"
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

const Sidebar = ({admin, settingsPage,user,account}) => {
  const navigate = useNavigate()
  const handleLogout = async ()=>{
    try {
      await axios.post("http://localhost:8000/api/auth/logout")
      localStorage.setItem("currentUser", null)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='sidebar'>
        <div className="top"><span className="logo">Company</span></div>
        <hr />
        <div className="center">
        {account && <h2>Hello {user.fName}</h2>}
            <ul>
                {!settingsPage || !admin && <li><Link className='link' to={`/account/${user._id}}`} style={{textDecoration: "none"}}><AccountCircleIcon className='icon' /><span>Account</span></Link></li>}
                {settingsPage || !admin && <li><Link className='link' to={`/settings/${user._id}`} style={{textDecoration: "none"}}><SettingsIcon className='icon' /><span>Settings</span></Link></li>}
                {admin && <li><Link className='link' to={`/admin`} style={{textDecoration: "none"}}><RequestQuoteIcon className='icon' /><span>Add Product</span></Link></li>}
                {admin && <li><Link className='link' to={`/userupdate`} style={{textDecoration: "none"}}><PersonAddIcon className='icon' /><span>User Update</span></Link></li>}
                <li onClick={handleLogout}><Link className='link' to={`/`} style={{textDecoration: "none"}}><LogoutIcon className='icon' /><span>Logout</span></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar