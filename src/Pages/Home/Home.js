import React from 'react'
import "./Home.css"
import HomeSlider from '../../Components/Slider/HomeSlider'
import FlashDeals from '../../Components/FlashDeals/FlashDeals'
import HomeCategory from '../../Components/Categories/HomeCategory'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import TopBrands from '../../Components/TopBrands/TopBrands'
import BestSelling from '../../Components/BestSelling/BestSelling'
import OffersBanners from '../../Components/OfferBanners/OffersBanners'
import BestSellingData from '../../Components/BestSelling/BestSellingData'
import ProductCard from '../../Components/ProductCard/ProductCard'
import FeaturedProductsData from '../../Components/Datas/FeaturedProductsData'

const Home = () => {

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
            <div className="offer-banners">
                <OffersBanners />
            </div>
            <div className="featured-products">
                <div className="featured-products-title">
                    <h1>Featured</h1>
                    <p>Products</p>
                </div>
                <div className='featured-product-box'>
                    {FeaturedProductsData.map((item) => (
                        <>
                            <FeaturedProducts 
                             key={item.id}
                             id={item.id}
                             cover={item.cover}
                             discout={item.discout}
                             name={item.title}
                             price={item.price}
                             description={item.description} />
                        </>
                    ))}
                </div>
            </div>
            <div className="top-brands">
                <div className="top-brands-title">
                    <h1>Top</h1>
                    <p>Brands</p>
                </div>
                <TopBrands />
            </div>
            <div className="bestSelling-products">
                <div className="bestSelling-products-title">
                    <h1>Best Selling</h1>
                    <p>Products</p>
                </div>
                <div className='bestselling-product-box'>
                    {BestSellingData.map((item) => (
                        <>
                            <BestSelling
                                key={item.id}
                                id={item.id}
                                cover={item.cover}
                                name={item.title}
                                price={item.price}
                                description={item.description} />
                        </>
                    ))}
                </div>
            </div>
            <div className="new-arrivels">
                <div className="new-arrivels-title">
                    <h1>New</h1>
                    <p>Arrivels</p>
                </div>
                <div className='newarrivel-product-box'>
                    {BestSellingData.map((item) => (
                        <>
                            <ProductCard
                                key={item.id}
                                id={item.id}
                                cover={item.cover}
                                name={item.title}
                                price={item.price}
                                description={item.description}
                            />
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home
