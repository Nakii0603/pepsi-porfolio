"use client";
import React, { useState } from "react";

const LoyaltyBtn = ({ language }) => {
  const [animate, setAnimate] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
    }, 600);
  };

  return (
    <div>
      <button
        className={`button ${animate ? "animate" : ""}`}
        onClick={handleClick}
        aria-live="polite"
      >
        {language === "mn" ? "Лояалти" : "Loyalty"}
      </button>
    </div>
  );
};

export default LoyaltyBtn;
