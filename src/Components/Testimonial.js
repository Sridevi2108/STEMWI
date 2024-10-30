import React from "react";
import mentorimg from "../Assets/mentor.png";
const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Want to become an <center>ambassador?</center></h1>
        <p className="primary-text">
        Join STEM WI and become a mentor to inspire and guide women in STEM.
        Together, we'll break barriers and create a more inclusive future!
        </p>
      </div>
      <div className="mentor_image">
          <img src={mentorimg} alt="" />
        </div>

    </div>
  );
};

export default Testimonial;