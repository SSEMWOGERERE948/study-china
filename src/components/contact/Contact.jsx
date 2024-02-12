import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  // Exact coordinates for Mukama Plaza, Kisekka Market, Kampala, Uganda
  const latitude = 0.314477;
  const longitude = 32.579235;
  const map = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.124229067627!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db508bf02af13%3A0x2ec05e2e11accc51!2sMukama%20Plaza!5e0!3m2!1sen!2sug!4v1667950134515!5m2!1sen!2sug" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`;

  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe title="Map" src={map} allowFullScreen="" loading="lazy" />
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>Mukama Plaza, Kisekka Market, Kampala, Uganda</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>chinastudy256@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>+256 700 670 184</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
