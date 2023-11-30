import React from 'react'
import "./NewArrivel.css"
import BestSellingData from '../BestSelling/BestSellingData'

const NewArrivel = () => {
  return (
    <div className='newarrivel-product-box'>
            {BestSellingData.map((item) => (
                <>
                    <div className="newarrivel-box-item" key={item.id}>
                        <div className="newarrivel-box-img">
                            <img src={item.cover} alt="" />
                        </div>
                        <div className="newarrivel-box-detail">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <h4>${(item.price-(item.price/100)*30).toFixed(2)} <del>${item.price}</del></h4>
                        </div>
                    </div>
                </>
            ))}
        </div>
  )
}

export default NewArrivel
