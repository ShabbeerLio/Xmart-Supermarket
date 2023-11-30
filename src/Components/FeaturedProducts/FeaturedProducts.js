import React from 'react'
import "./FeaturedProducts.css"
import FeaturedProductsData from './FeaturedProductsData'

const FeaturedProducts = () => {
    return (
        <div className='featured-product-box'>
            {FeaturedProductsData.map((item) => (
                <>
                    <div className="featured-box-item" key={item.id}>
                        <span>{item.discout}%</span>
                        <div className="featured-box-img">
                            <img src={item.cover} alt="" />
                        </div>
                        <div className="featured-box-detail">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <h4>${(item.price-(item.price/100)*(item.discout)).toFixed(2)}<del>${item.price}</del></h4>
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default FeaturedProducts
