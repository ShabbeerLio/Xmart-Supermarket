import React from 'react'
import "./Footer.css"
import Logo from '../Assits/MART.png'
import { Link } from 'react-router-dom'
import ContactDetail from '../../Pages/Contact/ContactDetail'

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
              <ContactDetail/>
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
