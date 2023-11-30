import React from 'react'
import "./Footer.css"
import Logo from '../Assits/MART.png'
import { Link } from 'react-router-dom'

const Footer = (props) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <>
      <div className="footer">
        <div className='footer-box'>
          <div className="company-name">
            <div className="company-icon">
              <Link to='/'>
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="company-detail">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum veritatis maiores ab incidunt minima dolor amet rerum placeat explicabo ex qui laborum dicta officia tenetur minus, unde quae. Illo ratione voluptatibus dolorum aut hic fugit officiis animi voluptatem perspiciatis, aliquam, expedita cumque consequuntur! Voluptatem necessitatibus temporibus magni exercitationem dolore eligendi.</p>
            </div>
          </div>
          <div className="footer-contactUs">
            <ul>
              <h4>Contact Us</h4>
              <li>
                <span>
                  <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                    <path fill="#000000" d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.772 14.772 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5Z"></path>
                  </svg>
                </span>
                <p>Phone :</p>
                <p>+91 9065686786</p>
              </li>
              <li>
                <span>
                  <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                    <path fill="#000000" fillRule="evenodd" d="M6.712 3.97a59.38 59.38 0 0 1 10.576 0l1.518.136A3.28 3.28 0 0 1 21.76 6.9a35.257 35.257 0 0 1 0 10.2a3.28 3.28 0 0 1-2.954 2.793l-1.518.136a59.38 59.38 0 0 1-10.576 0l-1.518-.136A3.28 3.28 0 0 1 2.24 17.1a35.257 35.257 0 0 1 0-10.2a3.28 3.28 0 0 1 2.954-2.794l1.518-.135Zm-.856 2.87a.75.75 0 0 0-1.106.66V17a.75.75 0 0 0 1.5 0V8.756l5.394 2.904c.222.12.49.12.712 0l5.394-2.904V17a.75.75 0 0 0 1.5 0V7.5a.75.75 0 0 0-1.106-.66L12 10.148L5.856 6.84Z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <p>Email:</p>
                <p>mdshabbeer707@gmail.com</p>
              </li>
              <li>
                <span>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
                    <path fill="#000000" d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"></path>
                  </svg>
                </span>
                <p>Address:</p>
                <p>3/37 Narkildaga, Kolkata, West Bengal, 700011</p>
              </li>
            </ul>
          </div>
          <div className="footer-support">
            <ul>
              <h4>Customer Support</h4>
              <li>
                <Link to="/helpCenter" onClick={scrollToTop} style={{ textDecoration: "none" }}>
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/howToBuy" onClick={scrollToTop} style={{ textDecoration: "none" }}>
                  How to Buy
                </Link>
              </li>
              <li>
                <Link to="/trackYourOrder" onClick={scrollToTop} style={{ textDecoration: "none" }}>
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link to="/corporate&bulkPurchasing" onClick={scrollToTop} style={{ textDecoration: "none" }}>
                  Corporate & Bulk Purchasing
                </Link>
              </li>
              <li>
                <Link to="/returnAndRefundPolicy" onClick={scrollToTop} style={{ textDecoration: "none" }}>
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-about">
            <ul>
              <h4>About Us</h4>
              <li>
                <Link to="/contact" onClick={scrollToTop} style={{ textDecoration: "none" }}>
                  Contact us
                </Link>
              </li>
              <li >
                <Link to="/termsAndCondition" onClick={scrollToTop} style={{ textDecoration: "none" }}>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacyPolicy" onClick={scrollToTop} style={{ textDecoration: "none" }}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright-box">
          <p>Copyright &copy; 2023 All rights reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer
