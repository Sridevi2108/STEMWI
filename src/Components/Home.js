import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
                <b>STEM WI</b>
          </h1>
          <h2 className="secondary-heading">
            <i>“Women Innovate STEM”</i>
          </h2>

          <p className="primary-text">
            We empowers women to excel in STEM by offering resources, mentorship, and networking.
            Join our inclusive community and thrive in STEM careers.
          </p>
          <button className="secondary-button">
            Join Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;