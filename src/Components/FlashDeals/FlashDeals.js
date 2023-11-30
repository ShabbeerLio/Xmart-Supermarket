import React from 'react'
import "./FlashDeals.css"
import Men from "../../Components/Assits/Men.png"
import Women from "../../Components/Assits/Women.png"
import Kid from "../../Components/Assits/Kid.png"
import Electronic from "../../Components/Assits/Electronic.png"
import Drink from "../../Components/Assits/Drink.png"
import Foods from "../../Components/Assits/Dish.png"

const FlashDeals = () => {
    return (
        <>
            <div className="home-deals">
                <div className="deals-boxbig-1">
                    <div className="dealsBox-right">
                        <img src={Men} alt="" />
                    </div>
                    <div className="dealsBox-left">
                        <p>explore</p>
                        <h2>Men's Collections</h2>
                    </div>
                </div>
                <div className="deals-box1">
                    <div className="dealsBox-left">
                        <p>explore</p>
                        <h2>Women</h2>
                    </div>
                    <div className="dealsBox-right">
                        <img src={Women} alt="" />
                    </div>
                </div>
                <div className="deals-box2">
                    <div className="dealsBox-left">
                        <p>explore</p>
                        <h2>Kids</h2>
                    </div>
                    <div className="dealsBox-right">
                        <img src={Kid} alt="" />
                    </div>
                </div>
                <div className="deals-box3">
                    <div className="dealsBox-right">
                        <img src={Foods} alt="" />
                        {/* <p>explore</p> */}
                        <h2>graving with hunger</h2>
                    </div>
                </div>
                <div className="deals-box4">
                    <div className="dealsBox-right">
                        {/* <p>explore</p> */}
                        <h2>Electronics</h2>
                        <img src={Electronic} alt="" />
                    </div>
                </div>

                <div className="deals-boxbig-2">
                    <div className="dealsBox-left">
                        <p>Refresh yourself</p>
                        <h2>Cold Drink</h2>
                    </div>
                    <div className="dealsBox-right">
                        <img src={Drink} alt="" />
                    </div>

                </div>
            </div></>
    )
}

export default FlashDeals
