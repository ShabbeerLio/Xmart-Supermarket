import React, { useEffect, useRef, useState } from 'react'
import "./Orders.css"
import ProductCardView from '../ProductCard/ProductCardView';

const Orders = (props) => {
    const [orderDetail, setOrderDetail] = useState(true);

    const handleOrder = () => {
        setOrderDetail(false)
    }
    const handleOrderDetail = () => {
        setOrderDetail(true)
    }

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
        <div className='orders'>
            <div className="order-box">
                {orderDetail ? (
                    <>
                        <div className="order-box-item" onClick={handleOrder}>
                            <div className="order-box-img">
                                <img src="https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                            <div className="order-box-detail">
                                <h3>Name</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo!</p>
                                <h4>${(784 - (784 / 100) * 10).toFixed(2)}</h4>
                            </div>
                        </div>
                        <div className="order-box-delivery">
                            <p>
                                <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" stroke="#000000" strokeLinecap="round" strokeWidth="1.5">
                                        <path strokeLinejoin="round" strokeMiterlimit="1.5" d="M8 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"></path>
                                        <path d="M10.05 17H15V6.6a.6.6 0 0 0-.6-.6H1m4.65 11H3.6a.6.6 0 0 1-.6-.6v-4.9"></path>
                                        <path strokeLinejoin="round" d="M2 9h4"></path>
                                        <path d="M15 9h5.61a.6.6 0 0 1 .548.356l1.79 4.028a.6.6 0 0 1 .052.243V16.4a.6.6 0 0 1-.6.6h-1.9M15 17h1"></path>
                                    </g>
                                </svg>
                            </p>
                            <div className="order-delivery-status">
                                <h4>Delivered</h4>
                                <p>on Tue , 12 Dec 2023</p>
                            </div>
                        </div>
                        <div className="order-box-rating">
                            <p>Rate Product</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="order-detail-box">
                            <span onClick={handleOrderDetail}>X</span>
                            <div className="order-detail-box-item">
                                <div
                                    ref={productCardRef}
                                    className={`order-detail-box-img ${isCardOpen ? 'open' : ''}`}
                                    onClick={handleCardClick}>
                                    <img src="https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </div>
                                <div className="order-detail-box-detail">
                                    <h3>Name</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo!</p>
                                    {/* <h4>${(784 - (784 / 100) * 10).toFixed(2)}</h4> */}
                                    <p>size : 4</p>
                                </div>
                                <div className="order-detail-box-status">
                                    <p>
                                        <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="none" stroke="#000000" strokeLinecap="round" strokeWidth="1.5">
                                                <path strokeLinejoin="round" strokeMiterlimit="1.5" d="M8 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"></path>
                                                <path d="M10.05 17H15V6.6a.6.6 0 0 0-.6-.6H1m4.65 11H3.6a.6.6 0 0 1-.6-.6v-4.9"></path>
                                                <path strokeLinejoin="round" d="M2 9h4"></path>
                                                <path d="M15 9h5.61a.6.6 0 0 1 .548.356l1.79 4.028a.6.6 0 0 1 .052.243V16.4a.6.6 0 0 1-.6.6h-1.9M15 17h1"></path>
                                            </g>
                                        </svg>
                                    </p>
                                    <div className="order-detail-delivery-status">
                                        <h4>Delivered</h4>
                                        <p>on Tue , 12 Dec 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-detail-ratinng">
                            <div className="order-detail-ratinng-img">
                                <img src="https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                            <div className="order-detail-ratinng-stars">
                                <h3>Rate this Product</h3>
                                <p>start*****</p>
                            </div>
                        </div>
                        <div className="Order-detail-deliveryadd">
                            <div className="Order-detail-deliveryadd-title">
                                <h3>Delivery </h3>
                                <p>Address</p>
                            </div>
                            <div className="Order-detail-delivery-detail">
                                <div className="Order-detail-delivery-detail-head">
                                    <h4>Shabbeer</h4>
                                    <h4>+91 9876543210</h4>
                                </div>
                                <p>Address of that user order</p>
                            </div>
                        </div>
                        <div className="order-detail-price-box">
                            <div className="Order-detail-deliveryadd-title">
                                <h3>Total</h3>
                                <p>Item Price</p>
                            </div>
                            <div className="order-detail-price-box-head">
                                <div className="order-detail-price-box-title">
                                    <h3>$788</h3>
                                    <p>You saved ₹ 79.50 on this item</p>
                                </div>
                                <div className="order-detail-price-box-price">

                                    <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                                        <path fill="#000000" fillRule="evenodd" d="M20 4H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1M4 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm2 5h2v2H6zm5 0a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm-3 4H6v2h2zm2 1a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m-2 3H6v2h2zm2 1a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1" clipRule="evenodd"></path>
                                    </svg>

                                    <p>View Breakup</p>
                                </div>
                            </div>
                            <div className="order-detail-price-box-head-paid">

                                <svg width="1.25em" height="1em" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" >
                                    <path fill="#000000" d="M105.72 215v41.25h57.1a49.66 49.66 0 0 1-21.14 32.6c-9.54 6.55-21.72 10.28-36 10.28c-27.6 0-50.93-18.91-59.3-44.22a65.61 65.61 0 0 1 0-41c8.37-25.46 31.7-44.37 59.3-44.37a56.43 56.43 0 0 1 40.51 16.08L176.47 155a101.24 101.24 0 0 0-70.75-27.84a105.55 105.55 0 0 0-94.38 59.11a107.64 107.64 0 0 0 0 96.18v.15a105.41 105.41 0 0 0 94.38 59c28.47 0 52.55-9.53 70-25.91c20-18.61 31.41-46.15 31.41-78.91a133.76 133.76 0 0 0-1.75-21.78Zm389.41-4c-10.13-9.38-23.93-14.14-41.39-14.14c-22.46 0-39.34 8.34-50.5 24.86l20.85 13.26q11.45-17 31.26-17a34.05 34.05 0 0 1 22.75 8.79a28.14 28.14 0 0 1 9.69 21.23v5.51c-9.1-5.07-20.55-7.75-34.64-7.75c-16.44 0-29.65 3.88-39.49 11.77s-14.82 18.31-14.82 31.56a39.74 39.74 0 0 0 13.94 31.27c9.25 8.34 21 12.51 34.79 12.51c16.29 0 29.21-7.3 39-21.89h1v17.72h22.61V250c.07-16.55-4.92-29.66-15.05-39m-19.23 89.3a37.32 37.32 0 0 1-26.57 11.16a28.61 28.61 0 0 1-18.33-6.25a19.41 19.41 0 0 1-7.77-15.63c0-7 3.22-12.81 9.54-17.42s14.53-7 24.07-7c13.16-.16 23.46 2.84 30.8 8.78c0 10.13-3.96 18.91-11.74 26.36m-93.65-142a55.71 55.71 0 0 0-40.51-16.3h-62.67v186.74h23.63V253.1h39c16 0 29.5-5.36 40.51-15.93c.88-.89 1.76-1.79 2.65-2.68a54.45 54.45 0 0 0-2.61-76.23Zm-16.58 62.23a30.65 30.65 0 0 1-23.34 9.68H302.7V165h39.63a32 32 0 0 1 22.6 9.23a33.18 33.18 0 0 1 .74 46.26ZM614.31 201l-36.54 91.7h-.45L539.9 201h-25.69L566 320.55l-29.35 64.32H561L640 201Z"></path>
                                </svg>
  
                                <p>Paid by UPI</p>
                            </div>
                            <div className="order-detail-price-box-head-voice">
                                <p>GET INVOICE</p>
                            </div>
                        </div>
                        <div className="order-detail-update-send">
                            <div className="Order-detail-deliveryadd-title">
                                <h3>Update</h3>
                                <p>Send to</p>
                            </div>
                            <div className="order-detail-update-send-no">
                                <p><svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                                    <path fill="#000000" d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.772 14.772 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5Z"></path>
                                </svg></p>
                                <p>+91 9876543210</p>
                            </div>
                            <div className="order-detail-update-send-no">
                                <p><svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                                    <path fill="#000000" fillRule="evenodd" d="M6.712 3.97a59.38 59.38 0 0 1 10.576 0l1.518.136A3.28 3.28 0 0 1 21.76 6.9a35.257 35.257 0 0 1 0 10.2a3.28 3.28 0 0 1-2.954 2.793l-1.518.136a59.38 59.38 0 0 1-10.576 0l-1.518-.136A3.28 3.28 0 0 1 2.24 17.1a35.257 35.257 0 0 1 0-10.2a3.28 3.28 0 0 1 2.954-2.794l1.518-.135Zm-.856 2.87a.75.75 0 0 0-1.106.66V17a.75.75 0 0 0 1.5 0V8.756l5.394 2.904c.222.12.49.12.712 0l5.394-2.904V17a.75.75 0 0 0 1.5 0V7.5a.75.75 0 0 0-1.106-.66L12 10.148L5.856 6.84Z" clipRule="evenodd"></path>
                                </svg></p>
                                <p>abcdefgij@gmail.com</p>
                            </div>
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
                        />
                    </>)}
            </div>
        </div>
    )
}

export default Orders
