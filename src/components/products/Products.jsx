import React from 'react'
import "./Products.scss"

const Products = ({user}) => {
  
  const products = user.products

  return (
    <div className='products'>
        <div className="top">
            <span><h3>Products</h3></span><span><h3>Amount</h3></span>
        </div>
        <hr />
        <div className="bottom">
        {products.map((item,i)=>(
            <div key={i} className='item'>
             <p className='productName'>{item.productName}</p>
             <p className='productAmount'>£{item.amount.toLocaleString('en-US')}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Products