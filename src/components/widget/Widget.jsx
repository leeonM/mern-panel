import React from 'react'
import "./Widget.scss"

const Widget = ({title, value}) => {
  return (
    <div className='widget'>
        <div className="left">
            <span className='title'>{title}</span>
        </div>
        <div className="right">
        <span className='value'>{value}</span>
        </div>
    </div>
  )
}

export default Widget