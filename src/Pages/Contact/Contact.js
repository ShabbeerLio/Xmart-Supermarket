import React, { useState } from "react";
import "./Contact.css";
import ContactDetail from "./ContactDetail";

const Contact = (props) => {
  // const [selectedItem, setSelectedItem] = useState("Contact Us");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);
  };

  // const handleToggle = () => {
  //   var blur = document.getElementById("blur");
  //   blur.classList.toggle("active");
  //   var popup = document.getElementById("popup");
  //   popup.classList.toggle("active");
  // };

  return (
    <>
      <div className="contact">
        <div className="contact-body">
          <div className="contact-body-left">
            <div className="myaccount-head-title">
              <h2>Contact</h2>
              <p>Us</p>
            </div>
            <div className="contact-body-left-detail">
              <ul>
                <ContactDetail />
              </ul>
            </div>
          </div>
          <div className="contact-body-right">
            <form onSubmit={handleSubmit}>
              <div className="contact-form">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="contact-form">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="contact-form">
                <label htmlFor="number">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="contact-form">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div>
                <button type="submit" >Submit</button>
              </div>
            </form>
            <div className="close-button" onClick={props.contactClose}>
              X
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
