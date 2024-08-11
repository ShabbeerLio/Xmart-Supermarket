import React from 'react'
import "./Footer.css"
import Aboutimg from "../../Components/Assits/MART.png"
import SocialMedia from '../SocialMedia/SocialMedia';
import { Link } from 'react-router-dom';
// import fimg from "../../Components/Assits/MART.png"


const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };

  return (
    <>
      <div className="Footer">
        <div className="Footer-main">
          <div className="footer-top">
            <div className="footer-top-left">
              <h2>Be the first to know.</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis suscipit commodi tempora est quisquam pariatur sit, repudiandae nemo? Quam qui eos placeat sequi atque, provident excepturi veniam vel? Nisi, quaerat.</p>
            </div>
            <div className="footer-top-right">
              <div className="footer-right-quick">
                <h2>About Us</h2>
                <ul>
                  <li>
                    <Link onClick={scrollTop} to="/">About Us</Link>
                  </li>
                  <li>
                    <Link onClick={scrollTop} to="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link onClick={scrollTop} to="/">FAQ</Link>
                  </li>
                  <li>
                    <Link onClick={scrollTop} to="/">Corporate & Bulk Purchasing</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-detail-box">
            <div className="footer-left">
              <Link onClick={scrollTop} to="/">
                <img className="image2" src={Aboutimg} alt="" />
              </Link>
            </div>
            <div className="footer-right-quick">
              {/* <h2>Quick Links</h2> */}
              <ul>
                <li>
                  <Link onClick={scrollTop} to="/pukhya">Help Center</Link>
                </li>
                <li>
                  <Link onClick={scrollTop} to="/about">How to Buy</Link>
                </li>
                <li>
                  <Link onClick={scrollTop} to="/career">Track Your Order</Link>
                </li>
                <li>
                  <Link onClick={scrollTop} to="/contact-us">Returns & Refunds</Link>
                </li>
              </ul>
            </div>
            <div className="footer-social-media">
              <SocialMedia />
            </div>
          </div>
        </div>
        <div className="footer-down">
          <div className="footer-copyright">
            <p>© 2024 X-Mart Supermarket | All rights reserved</p>
          </div>
          <div className="footer-copyright-menu">
            <ul>
              <li>
                <Link onClick={scrollTop} to="/">Disclaimers</Link>
              </li>
              <li>
                <Link onClick={scrollTop} to="/">Terms & Condition</Link>
              </li>
              <li>
                <Link onClick={scrollTop} to="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer