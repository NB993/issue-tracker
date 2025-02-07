import React from "react";
import DefaultIconProps from "./DefaultIconProps";

function SmileIcon({ size = { width: "16", height: "16" } }: DefaultIconProps) {
  return (
    <svg width={size.width} height={size.height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.99992 14.6666C11.6818 14.6666 14.6666 11.6819 14.6666 7.99998C14.6666 4.31808 11.6818 1.33331 7.99992 1.33331C4.31802 1.33331 1.33325 4.31808 1.33325 7.99998C1.33325 11.6819 4.31802 14.6666 7.99992 14.6666Z"
        stroke="#14142B"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33325 9.33331C5.33325 9.33331 6.33325 10.6666 7.99992 10.6666C9.66659 10.6666 10.6666 9.33331 10.6666 9.33331"
        stroke="#14142B"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 6H6.00667" stroke="#14142B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 6H10.0067" stroke="#14142B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default SmileIcon;
