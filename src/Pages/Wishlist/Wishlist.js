import React, { useEffect, useRef, useState } from 'react'
import "./Wishlist.css"
import BestSellingData from '../../Components/BestSelling/BestSellingData'
import ProductCardView from '../../Components/ProductCard/ProductCardView'

const Wishlist = (props) => {

    const [wishlistItem, setWishlistItem] = useState([1])
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
        if (props.wishlistClose) {
            props.wishlistClose();
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
        <div className="wishlist-sidebar ">
            <div className="wishlist-sidebar-box open ">
                <div className="wishlist-box-head">
                    <div className="wishlist-box-head-title">
                        <h2>Wish</h2>
                        <p>list</p>
                    </div>
                    <p style={{ cursor: 'pointer' }} onClick={props.wishlistClose}>X</p>
                </div>
                {wishlistItem.length > 0 ? (
                    <>

                        <div className="wishlist-box-items" ref={productCardRef}>
                            {BestSellingData.slice(0, 4).map((item) => (
                                <>
                                    <div className={`wishlist-box-items-boxs" ${isCardOpen ? 'open' : ''}`}
                                        key={item.id}>
                                        <div className="wishlist-box-items-box">
                                            <div className="wishlist-box-img" onClick={handleCardClick}>
                                                <img src={item.cover} alt="" />
                                            </div>
                                            <div className="wishlist-box-detail" onClick={handleCardClick}>
                                                <h3>{item.title}</h3>
                                                <h3>${(item.price - (item.price / 100) * 10).toFixed(2)}</h3>
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
                                </>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="wishlist-box-noitems">
                            wishlist items
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

            </div>
        </div>
    )
}

export default Wishlist
