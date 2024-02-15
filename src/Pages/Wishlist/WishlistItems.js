import React, { useState, useRef, useEffect } from 'react'
import "./Wishlist.css";
import ProductCardView from '../../Components/ProductCard/ProductCardView';

const WishlistItems = (props) => {
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

    return (
        <>
            <div
                ref={productCardRef}
                className={`wishlist-box-items-boxs ${isCardOpen ? 'open' : ''}`}
                key={props.id}
                onClick={handleCardClick}
            >
                <div className="wishlist-box-items-box">
                    <div className="wishlist-box-img" onClick={handleCardClick}>
                        <img src={props.cover} alt="" />
                    </div>
                    <div className="wishlist-box-detail" onClick={handleCardClick}>
                        <h3>{props.name}</h3>
                        <h3>${(props.price - (props.price / 100) * 10).toFixed(2)}</h3>
                        <p>price drop</p>
                    </div>
                    <div className="wishlist-box-buttons">
                        <p>X</p>
                        <p>
                            <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                                <g fill="none" stroke="#000000" strokeLinejoin="round" strokeWidth="2">
                                    <path d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608L5 7Z"></path>
                                    <path strokeLinecap="round" d="m5 7l-.81-3.243A1 1 0 0 0 3.22 3H2m6 18h2m6 0h2"></path>
                                </g>
                            </svg>
                        </p>
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
export default WishlistItems
