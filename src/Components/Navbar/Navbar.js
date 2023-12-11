import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../Assits/MART.png'
import Cart from '../../Pages/Cart/Cart'
import Wishlist from '../../Pages/Wishlist/Wishlist'

const Navbar = (props) => {

    // cart
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }
    const cartClose = () => {
        setIsCartOpen(false)
    }

    const cartRef = useRef(null);

    // wishlist
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);
    const wishlistOpen = () => {
        setIsWishlistOpen(!isWishlistOpen);
    }
    const wishlistClose = () => {
        setIsWishlistOpen(false)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (cartRef.current && !cartRef.current.contains(event.target) && event.target.closest('.cart-sidebar-box') === null) {
            cartClose();
          }
          if (cartRef.current && !cartRef.current.contains(event.target) && event.target.closest('.wishlist-sidebar-box') === null) {
            wishlistClose();
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [cartRef]);

    return (
        <div className="nav-mainBox">
            <div className='nav-main'>
                <div className="nav-icon">
                    <Link to='/' onClick={scrollToTop}>
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="nav-search">
                    Search
                    {/* <span class="material-symbols-outlined">
                        search
                    </span> */}
                    <svg width="1.5em" height="1.5em" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
                        <g fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="4">
                            <path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"></path>
                            <path strokeLinecap="round" d="M26.657 14.343A7.975 7.975 0 0 0 21 12a7.975 7.975 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"></path>
                        </g>
                    </svg>

                </div>
                <div className="nav-items">
                    <ul>
                        <li>
                            <Link to='/' onClick={scrollToTop} >Home</Link>
                        </li>
                        <li>
                            <Link to='/products' onClick={scrollToTop}>Products</Link>
                        </li>
                        {/* <li>
                            <Link to='/cart'onClick={scrollToTop} >Cart</Link>
                        </li> */}
                        <li>
                            <Link to='/contact' onClick={scrollToTop} >Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="nav-rightBox" ref={cartRef}>
                    <div className="nav-cart" >
                        <Link onClick={cartOpen} >
                            <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                                <g fill="none" stroke="#000000" strokeLinejoin="round" strokeWidth="2">
                                    <path d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608L5 7Z"></path>
                                    <path strokeLinecap="round" d="m5 7l-.81-3.243A1 1 0 0 0 3.22 3H2m6 18h2m6 0h2"></path>
                                </g>
                            </svg>
                        </Link>
                    </div>
                    <div className="nav-wishlist">
                        <Link onClick={wishlistOpen} >
                            <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                                <path fill="#000000" d="m8.962 18.91l.464-.588l-.464.589ZM12 5.5l-.54.52a.75.75 0 0 0 1.08 0L12 5.5Zm3.038 13.41l.465.59l-.465-.59Zm-8.037-2.49a.75.75 0 0 0-.954 1.16l.954-1.16Zm-4.659-3.009a.75.75 0 1 0 1.316-.72l-1.316.72Zm.408-4.274c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137h1.5ZM8.497 19.5c.513.404 1.063.834 1.62 1.16c.557.325 1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043L8.497 19.5Zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.197-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842l.929 1.178ZM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713h1.5Zm-8.176 9.185c-.526.415-.995.779-1.448 1.043c-.452.264-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16l-.929-1.178Zm-5.148 0c-.796-.627-1.605-1.226-2.425-1.901l-.954 1.158c.83.683 1.708 1.335 2.45 1.92l.93-1.177Zm-5.768-5.63a7.252 7.252 0 0 1-.908-3.555h-1.5c0 1.638.42 3.046 1.092 4.274l1.316-.72Z"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className="nav-profile">
                        <Link to='/my-account' onClick={scrollToTop} >
                            <span class="material-symbols-outlined">
                                person
                            </span>
                        </Link>
                    </div>
                </div>
                {isCartOpen && (
                    <>
                        <Cart cartClose={cartClose} />
                    </>
                )}
                {isWishlistOpen && (
                    <>
                        <Wishlist wishlistClose={wishlistClose} />
                    </>
                )}
            </div>
        </div>
    )
}

export default Navbar
