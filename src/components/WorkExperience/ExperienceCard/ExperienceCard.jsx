"use client";

import React from "react";
import "./ExperienceCard.css";
const ExperienceCard = ({ details }) => {
  console.log(details);
  return (
    <div className="work-experience-card">
      <h6>{details.title}</h6>
      <div className="work-duration">{details.date}</div>
      <ul>
        {details.responsibilities.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ExperienceCard;
