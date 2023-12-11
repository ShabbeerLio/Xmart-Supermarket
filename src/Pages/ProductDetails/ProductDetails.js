import React, { useState } from 'react'
import "./ProductDetails.css"
import BestSellingData from '../../Components/BestSelling/BestSellingData';
import ProductCard from '../../Components/ProductCard/ProductCard';

const ProductDetails = () => {

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const [highlightsVisible, setHighlightsVisible] = useState(true);
  const [specificationVisible, setSpecificationVisible] = useState(false);

  const toggleHighlights = () => {
    setHighlightsVisible(!highlightsVisible);
  };

  const toggleSpecification = () => {
    setSpecificationVisible(!specificationVisible);
  };
    return (
        <div className='ProductDetails'>
            <div className="productDetails-main">
                <div className="productDetail-left">
                    <div className="productDetail-left-img">
                        <img src="https://images.unsplash.com/photo-1664610225312-ba25cd8dbe5f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </div>
                <div className="productDetail-right">
                    <div className="productDetail-right-detail">
                        <h3>Apple Watch 6</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quidem!</p>
                        <h4>${(543 - (543 / 100) * 30).toFixed(2)} <del>${543}</del></h4>
                        <hr />
                        <div className="productDetails-inde">
                            <p onClick={handleDecrease}>-</p>
                            <p>{quantity}</p>
                            <p onClick={handleIncrease}>+</p>
                        </div>
                        <div className="productDeatails-pincode">
                            <div className="productDeatails-pincode-box">
                                icon
                                <div className="productDeatails-pincode-items">
                                    <p>Enter your Pin Code for  Delivery  information</p>
                                    <input type="text" placeholder='Enter Delivery Pincode' />
                                    <button>Check</button>
                                </div>
                            </div>
                        </div>
                        <div className="productDetails-right-buttons">
                            <div className="product-details-addcart">
                                <p>Add To Cart</p>
                            </div>
                            <div className="product-details-buynow">
                                <p>Buy Now</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="productDetail-down-detail">
                        <div className="productDetail-down-detail-title">
                            <h3>Product </h3>
                            <p>Details</p>
                        </div>
                        <div className="productDetail-down-highlights">
                            <div className="productDetail-down-highlights-title" onClick={toggleHighlights}>
                                <h3>Highlights</h3>
                                {highlightsVisible ? '-' : '+'}
                            </div>
                            {highlightsVisible && (
                                <ul className="highlightsList">
                                    <li>good products</li>
                                    <li>good products</li>
                                    <li>good products</li>
                                </ul>
                            )}
                        </div>
                        <div className="productDetail-down-highlights">
                            <div className="productDetail-down-highlights-title" onClick={toggleSpecification}>
                                <h3>Specification</h3>
                                {specificationVisible ? '-' : '+'}
                            </div>
                            {specificationVisible && (
                                <div>
                                    <ul className="specificationList">
                                        <li>good products</li>
                                        <li>: good products</li>
                                    </ul>
                                    <ul className="specificationList">
                                        <li>good products</li>
                                        <li>: good products</li>
                                    </ul>
                                    <ul className="specificationList">
                                        <li>good products</li>
                                        <li>: good products</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="productDetail-down-customer">
                            <div className="productDetail-down-detail-title">
                                <h3>Customer</h3>
                                <p>Review</p>
                            </div>
                            <div className="productDetail-down-customer-items">
                                items
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productDetail-down">
                <div className="productDetail-down-products">
                    <div className="productDetail-down-products-title">
                        <h2>Related </h2>
                        <p>Products</p>
                    </div>
                    <div className="productDetail-down-products-items">
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
            </div>
        </div>
    )
}

export default ProductDetails
