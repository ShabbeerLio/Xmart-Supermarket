import React from 'react'
import "./SocialMedia.css"
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const SocialMedia = () => {
    return (
        <>
            <div className="media-items">
                <Link to={"//facebook.com"}>
                    <FaTwitter />
                </Link>
                {/* <p>
                    <FaInstagram />
                </p> */}
                <Link to={"//facebook.com"}>
                    <FaFacebookF />
                </Link>
                {/* <p>
                    <FaYoutube />
                </p> */}
                <Link to={"//facebook.com"}>
                    <FaLinkedinIn />
                </Link>
            </div>
        </>
    )
}

export default SocialMedia