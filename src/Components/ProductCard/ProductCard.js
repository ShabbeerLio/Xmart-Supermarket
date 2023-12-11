import React, { useState, useRef, useEffect } from 'react';
import "./ProductCard.css";
import ProductCardView from './ProductCardView';

const ProductCard = (props) => {
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
                className={`product-card-box ${isCardOpen ? 'open' : ''}`}
                key={props.id}
                onClick={handleCardClick}
            >
                <div className="product-card-box-img">
                    <img src={props.cover} alt="" />
                </div>
                <div className="product-card-box-detail">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <h4>${(props.price - (props.price / 100) * 30).toFixed(2)} <del>${props.price}</del></h4>
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

export default ProductCard;
