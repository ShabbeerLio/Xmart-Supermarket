import React, { useEffect, useRef, useState } from 'react'
import "./Cart.css"
import ProductCardView from '../../Components/ProductCard/ProductCardView';

const CartItems = (props) => {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const productCardRef = useRef();

    const handleCardClick = () => {
        setIsCardOpen(!isCardOpen);
    };

    const handleClickOutside = (event) => {
        if (
            productCardRef.current &&
            !productCardRef.current.contains(event.target) &&
            !(event.target.classList.contains('productView-box') || event.target.closest('.productView-box'))
        ) {
            setIsCardOpen(false);
        }
    };

    const handleButtonClick = () => {
        setIsCardOpen(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <div
                ref={productCardRef}
                className={`cart-box-items-boxs ${isCardOpen ? 'open' : ''}`}
                key={props.id}
                onClick={handleCardClick}
            >
                <div className="cart-box-items-box">
                    <div className="cart-box-img" >
                        <img src={props.cover} alt="" />
                    </div>
                    <div className="cart-box-detail">
                        <h3>{props.name}</h3>
                        <h3>${(props.price - (props.price / 100) * 10).toFixed(2)}</h3>
                        <div className="cart-box-detail-inde" onClick={(e) => e.stopPropagation()}>
                            <p onClick={handleDecrease}>-</p>
                            <p>{quantity}</p>
                            <p onClick={handleIncrease}>+</p>
                        </div>
                    </div>
                    <div className="cart-box-buttons" >
                        <p>X</p>
                    </div>
                </div>
            </div>
            {isCardOpen && (
                <>
                    <ProductCardView
                        key={props.id}
                        id={props.id}
                        cover={props.cover}
                        name={props.name}
                        price={props.price}
                        description={props.description}
                        onButtonClick={handleButtonClick}
                    />
                </>
            )}
        </>
    );
};

export default CartItems
