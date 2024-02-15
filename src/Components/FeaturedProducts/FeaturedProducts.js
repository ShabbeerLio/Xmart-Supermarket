import React, { useEffect, useRef, useState } from 'react'
import "./FeaturedProducts.css"
import ProductCardView from '../ProductCard/ProductCardView';

const FeaturedProducts = (props) => {

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
        className={`featured-box-item ${isCardOpen ? 'open' : ''}`}
        key={props.id}
        onClick={handleCardClick}
      >
         <span>{props.discout}%</span>
            <div className="featured-box-img">
                <img src={props.cover} alt="" />
            </div>
            <div className="featured-box-detail">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h4>${(props.price - (props.price / 100) * (props.discout)).toFixed(2)}<del>${props.price}</del></h4>
            </div>

      </div >
      {isCardOpen && (
        <>
          <ProductCardView
            key={props.id}
            id={props.id}
            cover={props.cover}
            name={props.name}
            price={props.price}
            description={props.description} />
        </>
      )
      }
    </>
    )
}

export default FeaturedProducts

