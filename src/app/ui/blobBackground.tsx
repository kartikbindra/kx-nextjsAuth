import './blobBackground.css';
import React from 'react';
import MouseBlob from './mouseBlob';

const BlobBackground = () => {
  return (
    <div className="blobbg fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        <svg xmlns="http://www.w3.org/2000/svg" id='svgbg'>
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    <div className ="blobContainer">
      {/* <div className="mouseBlob"></div> */}
        <MouseBlob />
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
      <div className="blob blob4"></div>
      <div className="blob blob5"></div>
      <div className="blob blob6"></div>
      </div>
    </div>
  );
};

export default BlobBackground;