import React from "react";

export default function Gong({ onGongStart, onGongEnd }) {
  const gongSound = new Audio("./gong.mp3");
  gongSound.addEventListener("ended", () => {
    console.log("ending");
    onGongEnd();
  });

  const playGong = () => {
    // THANK YOU JONATHAN CREAD, YOU ROCK
    if (gongSound.paused) {
      gongSound.play();
      onGongStart();
    } else {
      gongSound.currentTime = 0;
    }
  }

  return (
    <svg onClick={playGong} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" className="gong">
      <line x1="45" y1="20" x2="105" y2="250" stroke="black" strokeWidth="10" />
      <line x1="460" y1="20" x2="400" y2="250" stroke="black" strokeWidth="10" />

      <g id="post">
        <rect className="post-main" x="32" y="7" width="439" height="34" />
        <rect className="post-shadow" x="32" y="7" width="48" height="34" />
        <rect className="post-shadow" x="422" y="7" width="48" height="34" />
      </g>

      <g id="gong">
        <circle className="gong-main" cx="251.973" cy="279.276" r="195.255" />
        <path className="gong-other" d="M251.969,112.072c-92.345,0-167.206,74.86-167.206,167.206s74.86,167.206,167.206,167.206   s167.206-74.86,167.206-167.206S344.314,112.072,251.969,112.072z M251.969,419.577c-77.485,0-140.299-62.814-140.299-140.299   s62.814-140.299,140.299-140.299s140.299,62.814,140.299,140.299S329.454,419.577,251.969,419.577z" />
        <circle className="gong-other" cx="251.973" cy="279.276" r="59.665" />
      </g>
    </svg>
  )
}