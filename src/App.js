import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./pages/login/Login.jsx"
import Register from "./pages/register/Register.jsx"
import Account from "./pages/account/Account.jsx"
import Home from "./pages/home/Home.jsx"
import Settings from "./pages/accountSettings/Settings.jsx"
import AdminLogin from "./pages/adminLogin/AdminLogin.jsx"
import Admin from "./pages/admin/Admin.jsx"
import AdminUserUpdate from "./pages/adminUserUpdate/adminUserUpdate.jsx"
import Password from "./pages/passwordReset/Password.jsx"
import PasswordEmail from "./pages/passwordEmail/passwordEmail.jsx"
import OTP from "./pages/OTP/OTP.jsx"

function App() {

  return (
    <Router>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/adminlogin" element={<AdminLogin />} />
       <Route path="/admin" element={<Admin />} />
       <Route path="/userupdate" element={<AdminUserUpdate />} />
       <Route path="/account/:id" element={<Account />} />
       <Route path="/settings/:id" element={<Settings />} />
       <Route path="/reset-password/:id/:token" element={<Password />} />
       <Route path="/forgot-password" element={<PasswordEmail />} />
       <Route path="/otp" element={<OTP />} />
    </Routes>
    </Router>
  );
}

export default App;
