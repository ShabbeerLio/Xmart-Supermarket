import React from 'react'
import "./TopBrands.css"
import TopBrandsData from './TopBrandsData'

const TopBrands = () => {
    return (
        <div className='top-brand-box'>
            {TopBrandsData.map((item) => (
                <div className="top-brand-item" key={item.id}>
                    <div className="topbrand-img">
                        <img src={item.cover} alt="" />
                    </div>
                    <div className="top-brand-name">
                        <p>{item.brand}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TopBrands
