import React,{useEffect} from 'react'
import History from '../../components/history/History'
import Products from '../../components/products/Products'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import "./Account.scss"
import moment from "moment"
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  const navigate = useNavigate()

  useEffect(() => {
        if (!currentUser){
          navigate('/login')
        }
      }, [currentUser])

  const balance = currentUser.products.reduce((a,{amount})=> a + amount, 0)
  const interest = Math.round(currentUser.products.reduce((a,{interest})=> a + interest, 0) / currentUser.products.length)
  const payoutAmount = balance / 100 * interest

  const date = new Date()
  const userCreated = currentUser.createdAt
  const payDate = moment(userCreated).format("D")

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


let payMonth = monthNames[date.getMonth()+1]

const monthCalc = () => {
  while (monthNames[date.getMonth()] !== payMonth){
  return monthNames[date.getMonth()+1]
}

while (date.getDate() < Number(payDate)){
  return monthNames[date.getMonth()]
}
}
  return (
    <div className='account'>
      <Sidebar admin={false} settingsPage={false} user={currentUser} account={true}  d/>
      <div className="accountContainer">
        <div className="widgets">
          <Widget 
          title="Balance"
          value={`£${balance.toLocaleString('en-US')}`}
           />
          <Widget 
          title="Interest" 
          value={interest ? `${interest}%` : 0} 
          />
          <Widget
          title="Payout Date"
          value={`${payDate} ${monthCalc()}`}
           />
          <Widget
          title="Scheduled Payment"
          value={payoutAmount ? `£${payoutAmount.toLocaleString('en-US')}` : 0}
           />
        </div>
        <div className="transactions">
          <Products user={currentUser} />
          <History user={currentUser} />
        </div>
      </div>
    </div>
  )
}

export default Account