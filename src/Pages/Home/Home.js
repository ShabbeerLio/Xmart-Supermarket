import React from 'react'
import "./Home.css"
import HomeSlider from '../../Components/Slider/HomeSlider'
import FlashDeals from '../FlashDeals/FlashDeals'
import HomeCategory from '../../Components/Categories/HomeCategory'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import TopBrands from '../../Components/TopBrands/TopBrands'
import BestSelling from '../../Components/BestSelling/BestSelling'
import NewArrivel from '../../Components/NewArrivels/NewArrivel'

const Home = () => {
    // const categoryData = useState(Categories)
    // console.log(categoryData, 'data')

    return (
        <>
            <div className='home-main'>
                <HomeSlider />
            </div>
            <div className="home-deals-boxes">
                <div className="shop-by-Deals">
                    <h1>Flash</h1>
                    <p>Deals</p>
                </div>
                <FlashDeals />
            </div>
            <div className="home-categories">
                <div className="shop-by-categories">
                    <h1>Shop By</h1>
                    <p>Categories</p>
                </div>
                <HomeCategory />
            </div>
            <div className="featured-products">
                <div className="featured-products-title">
                    <h1>Featured</h1>
                    <p>Products</p>
                </div>
                <FeaturedProducts/>
            </div>
            <div className="top-brands">
                <div className="top-brands-title">
                    <h1>Top</h1>
                    <p>Brands</p>
                </div>
                <TopBrands/>
            </div>
            <div className="bestSelling-products">
                <div className="bestSelling-products-title">
                    <h1>Best Selling</h1>
                    <p>Products</p>
                </div>
                <BestSelling/>
            </div>
            <div className="new-arrivels">
                <div className="new-arrivels-title">
                    <h1>New</h1>
                    <p>Arrivels</p>
                </div>
                <NewArrivel/>
            </div>
        </>
    )
}

export default Home
