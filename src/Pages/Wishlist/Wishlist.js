import React, { useEffect, useRef, useState } from "react";
import "./Wishlist.css";
import BestSellingData from "../../Components/BestSelling/BestSellingData";
import ProductCardView from "../../Components/ProductCard/ProductCardView";
import WishlistItems from "./WishlistItems";

const Wishlist = (props) => {
  const [wishlistItem, setWishlistItem] = useState([1]);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const productCardRef = useRef();

  const handleClickOutside = (event) => {
    if (
      productCardRef.current &&
      !productCardRef.current.contains(event.target) &&
      !(
        event.target.classList.contains("productView-box") ||
        event.target.closest(".productView-box")
      )
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
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
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
          <p style={{ cursor: "pointer" }} onClick={props.wishlistClose}>
            X
          </p>
        </div>
        {wishlistItem.length > 0 ? (
          <>
            <div className="wishlist-box-items">
              {BestSellingData.slice(0, 4).map((item) => (
                <>
                  <WishlistItems
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
          </>
        ) : (
          <>
            <div className="wishlist-box-noitems">No items in wishlist</div>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
