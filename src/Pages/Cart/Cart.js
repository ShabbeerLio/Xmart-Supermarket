import React, { useEffect, useRef, useState } from 'react'
import "./Cart.css"
import BestSellingData from '../../Components/BestSelling/BestSellingData'
import ProductCardView from '../../Components/ProductCard/ProductCardView'

const Cart = (props) => {

    const [cartItem, setCartItem] = useState([1])

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

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
        if (props.cartClose) {
            props.cartClose();
        }
        setIsCardOpen(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="cart-sidebar ">
            <div className="cart-sidebar-box open ">
                <div className="cart-box-head">
                    <div className="cart-box-head-title">
                        <h2>Shopping</h2>
                        <p>Cart</p>
                    </div>
                    <p style={{ cursor: 'pointer' }} onClick={props.cartClose}>X</p>
                </div>
                {cartItem.length > 0 ? (
                    <>
                        <div className="cart-box-items" ref={productCardRef}>
                            {BestSellingData.slice(0, 4).map((item) => (
                                <>
                                    <div className={`cart-box-items-boxs${isCardOpen ? 'open' : ''}`}
                                        key={item.id}
                                        onClick={handleCardClick}>
                                        <div className="cart-box-items-box">
                                            <div className="cart-box-img" >
                                                <img src={item.cover} alt="" />
                                            </div>
                                            <div className="cart-box-detail">
                                                <h3>{item.title}</h3>
                                                <h3>${(item.price - (item.price / 100) * 10).toFixed(2)}</h3>
                                                <div className="cart-box-detail-inde">
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
                                </>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="cart-box-noitems">
                            No items
                        </div>
                    </>
                )}

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
                    </>)}
                <div className="cart-proceed">
                    <div className="cart-proceed-box">
                        <p>Proceed to Checkout</p>
                        <p>$786</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
