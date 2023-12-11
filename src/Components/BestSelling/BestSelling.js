import React, { useEffect, useRef, useState } from 'react'
import "./BestSelling.css"
import ProductCardView from '../ProductCard/ProductCardView';

const BestSelling = (props) => {

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

  // console.log(isCardOpen,"open")


  return (
    <>
      <div
        ref={productCardRef}
        className={`bestselling-box-item ${isCardOpen ? 'open' : ''}`}
        key={props.id}
        onClick={handleCardClick}
      >
        <div className="bestselling-box-img">
          <img src={props.cover} alt="" />
        </div>
        <div className="bestselling-box-detail">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <h4>${(props.price - (props.price / 100) * 10).toFixed(2)}</h4>
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
  );
};

export default BestSelling
