import React from 'react'
import Slider from 'react-slick'
import Sdata from './Sdata'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./HomeSlider.css"

const HomeSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>
        },
    }

    return (
        <Slider {...settings}>
            {Sdata.map((value, index) => {
                return (
                    <>
                        <div className="home-slider" key={index}>

                            <div className="slider-left">
                                <div className="slider-brand-name">
                                    <p>{value.title}</p>
                                </div>
                                <div className="slider-detail">
                                    <p>{value.desc}</p>
                                </div>
                                <div className="slider-bottom">
                                    <div className="slider-price">
                                        <p>{value.price}</p>
                                    </div>
                                    <div className="slider-buttons">
                                        <div className="slider-buy">
                                            Buy Now
                                        </div>
                                        <div className="slider-explore">
                                            Explore More
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-right">
                                <div className="home-design">
                                    <img src={value.cover} alt="" />
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </Slider>
    )
}

export default HomeSlider
