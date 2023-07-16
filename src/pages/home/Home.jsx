import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='container'>
      <div className="hero">
        <img src="https://source.unsplash.com/rwBVkoPNkhQ" alt="" className='heroImg' />
        <div className="heroText">
          <hr className='hrOne' />
          <div className='heroTextContainer'>
          <h1>Investor Portal</h1>
          <p className='titleSub'>Login to your account to track your investments or register to get started</p>
        <div className="second">
          <h2 className='firstH2'>Support for your investing every step of the way</h2>
          <div className='secondContainer'>
              <div className="left">
                 <h3>Different types of investments</h3>
                 <p>Here we take a look at the four main types of investments – cash, fixed interest, shares and property.</p>
              </div>
              <div className="right">
                <h3>How much risk?</h3>
                <p>There are a few key things to keep in mind when deciding what level of risk you are comfortable with.</p>
              </div>
          </div>
          <hr className='hrDivider' />
          <div className="thirdContainer">
          <h2>Financial advice for your future</h2>
          <p>We all have different goals in life and financial advice is about 
          how you can best manage your money now, while also planning ahead to 
          achieve your financial goals. We will match you with the best investments 
          to suit your needs</p>
          </div>
        </div>
        </div>
      </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home