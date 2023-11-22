import React from 'react'
import "./BestSelling.css"
import BestSellingData from './BestSellingData'

const BestSelling = () => {
  return (
    <div className='bestselling-product-box'>
      {BestSellingData.map((item) => (
        <>
          <div className="bestselling-box-item" key={item.id}>
            {/* <span>{item.discout}%</span> */}
            <div className="bestselling-box-img">
              <img src={item.cover} alt="" />
            </div>
            <div className="bestselling-box-detail">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <h4>${item.price}</h4>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default BestSelling
