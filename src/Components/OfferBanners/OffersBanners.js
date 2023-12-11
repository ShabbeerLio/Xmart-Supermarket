import React from 'react'
import "./OffersBanners.css"
import Slider from 'react-slick'
import TopBrandsData from '../Datas/TopBrandsData'

const OffersBanners = () => {

    // slider
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>
        },
    }

    return (
        <div className='OffersBanners-box'>
            <Slider {...settings}>
                {TopBrandsData.map((item) => (
                    <div className="OffersBanners-item" key={item.id}>
                        <div className="OffersBanners-img">
                            <img src={item.cover} alt="" />
                        </div>
                        <div className="OffersBanners-name">
                            <p>Offers 20% off</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default OffersBanners;
