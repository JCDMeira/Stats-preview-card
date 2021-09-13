import React from 'react';
import './style.css';
import mainImage from '../../assets/images/image-header-desktop.png';
import { InfoData } from '../InfoData';

function Card() {
  return (
    <div className="card">
      <div className="fieldImage">
        <img src={mainImage} alt="main image" />
      </div>

      <div className="fieldInfo" id="fieldInfo">
        <div className="fieldText">
          <h1>
            Get <span> insights </span>that help your business grow.
          </h1>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </div>

        <div className="fieldData">
          <InfoData value="10k+">Companies </InfoData>
          <InfoData value="314">Templates </InfoData>
          <InfoData value="12M+">queries </InfoData>
        </div>
      </div>
    </div>
  );
}

export { Card };
