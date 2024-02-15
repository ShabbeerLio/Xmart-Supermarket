import React, { useEffect, useRef, useState } from 'react'
import "./Cart.css"
import BestSellingData from '../../Components/BestSelling/BestSellingData'
import ProductCardView from '../../Components/ProductCard/ProductCardView'
import CartItems from './CartItems'

const Cart = (props) => {

    const [cartItem, setCartItem] = useState([1])
    const [isCardOpen, setIsCardOpen] = useState(false);
    const productCardRef = useRef();

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
                                    <CartItems
                                        key={item.id}
                                        id={item.id}
                                        cover={item.cover}
                                        name={item.title}
                                        price={item.price}
                                    />
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
