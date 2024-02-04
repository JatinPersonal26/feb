import React, { useEffect, useRef, useState } from 'react';
import bgImage from './assets/bg2.png'; // Replace with the path to your background image
import './prop.css'; // Import the CSS file for styling

const ValentineProposal = () => {
 const [showCuteMessage, setShowCuteMessage] = useState(false);
 const [showConfetti, setShowConfetti] = useState(false);

 const noButtonRef = useRef(null);

 const handleYesClick = () => {
  setShowConfetti(true);
  setTimeout(() => {
   setShowConfetti(false);
  }, 4000);
 };

 const handleNoClick = () => {
  setShowCuteMessage(true);
 };

 const getRandomColor = () => {
  const colorNames = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
  return colorNames[Math.floor(Math.random() * colorNames.length)];
 };

 const moveNoButtonRandomly = () => {
  const buttonElement = noButtonRef.current;

  if (buttonElement) {
   const randomColor = getRandomColor();

   buttonElement.innerHTML = `Yes but in ${randomColor}`;
   buttonElement.style.backgroundColor = randomColor;
  }
 };

 const handleNoBtnHover = () => {
  moveNoButtonRandomly();
 };

 const handleNoBtnLeave = () => {
  const buttonElement = noButtonRef.current;

  if (buttonElement) {
   buttonElement.innerHTML = "No";
   buttonElement.style.backgroundColor = ""; // Reset to default color
  }
 };

 return (
  <div>
   <div className="full-screen-bg">
    <img src={bgImage} alt="Background" />
   </div>
   {/* <div className="full-screen-overlay"></div> */}
   <div className="valentine-container">
    <h1>Will you be my Valentine?</h1>
    <button
     onClick={handleYesClick}
     className="yes-button"
    >
     Yes
    </button>
    <button
     onClick={handleYesClick}
     onMouseEnter={handleNoBtnHover}
     onMouseLeave={handleNoBtnLeave}
     className="no-button"
     ref={noButtonRef}
    >
     No
    </button>
    {showCuteMessage && (
     <div className="cute-message">
      <p>Aww, that's sweet! 🥰</p>
     </div>
    )}
    {showConfetti && (
     <div className="confetti">
      <p>Yay! She said yes! 🎉</p>
     </div>
    )}
   </div>
  </div>
 );
};

export default ValentineProposal;

