import React from "react";
import data from "../Assets/data.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/Jobs.png";
import successstories from "../Assets/success.png";

const Work = () => {
  const workInfoData = [
    {
      image: data,
      title: "Resource Hub",
      text: "Our Resource Hub offers a comprehensive collection of materials designed to help you thrive in your STEM journey.",
    },
    {
      image: ChooseMeals,
      title: "Connect with mentor",
      text: "It connects you with experienced professionals who are eager to share their insights, guidance, and industry knowledge",
    },
    {
      image: DeliveryMeals,
      title: "Job/Internships",
      text: "Launch your STEM career with our dedicated Job/Internships section!",
    },
    {
        image: successstories,
        title: "Sucess stories",
        text: "Be inspired by the remarkable journeys of women who have thrived in STEM!",
      },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Why StemWi</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        StemWi addresses the underrepresentation of women in STEM by providing tailored resources, mentorship, job opportunities, and networking events.
        It breaks down barriers like limited access to information, lack of mentorship, and challenges in job markets. 
        The platform fosters an inclusive community to empower women to succeed in STEM careers.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} height="120" width="120" alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;