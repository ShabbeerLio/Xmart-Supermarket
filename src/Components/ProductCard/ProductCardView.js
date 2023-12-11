import React, { useState } from 'react';
import "./ProductCard.css";
import { Link } from 'react-router-dom';

const ProductCardView = (props) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleButtonClick = () => {
        if (props.onButtonClick) {
            props.onButtonClick();
        }
        window.scrollTo({
            top: 0,
            behavior: 'auto'
          });
    };

    // const scrollToTop = () => {
    //     window.scrollTo({
    //       top: 0,
    //       behavior: 'auto'
    //     });
    //   };


    return (
        <div className="productView" key={props.id}>
            <div className="productView-box">
                <div className="ProductView-left">
                    <img src={props.cover} alt="" />
                </div>
                <div className="ProductView-right">
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                    <h2>${(props.price - (props.price / 100) * 30).toFixed(2)} <del>${props.price}</del></h2>
                    <div className="producctView-quantity">
                        <div className="productView-inde">
                            <p onClick={handleDecrease}>-</p>
                            <p>{quantity}</p>
                            <p onClick={handleIncrease}>+</p>
                        </div>
                        <div className="productView-total">
                            <h2>${(quantity * (props.price - (props.price / 100) * 30)).toFixed(2)}</h2>
                        </div>
                    </div>
                    <div className="productView-cart-btn">
                        <p>Add to Cart</p>
                    </div>
                    <Link to="/products-details" onClick={handleButtonClick}>
                        <div className="productView-detail-btn" >
                            <p>View Detail</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCardView;
