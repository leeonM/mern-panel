import React from 'react'
import "./Navbar.scss"
import {Link} from "react-router-dom"

const Navbar = ({loginPage, registerPage}) => {

  return (
    <div className='navbar'>
        <div className="wrapper">
              <Link to="/" className='link' style={{textDecoration:"none"}}><h2 className='logoIcon'>InvestBoard</h2></Link>
              <div className='buttons'>
              {!registerPage && <Link to="/register" style={{textDecoration:"none"}}><p className='regBtn'>Register</p></Link>}
              {!loginPage && <Link to="/login" style={{textDecoration:"none"}}><p className='loginBtn'>Login</p></Link>}
              </div>
        </div>
    </div>
  )
}

export default Navbar