import React from "react";
import DefaultIconProps from "./DefaultIconProps";

function XsquareIcon({ size = { width: "16", height: "16" } }: DefaultIconProps) {
  return (
    <svg width={size.width} height={size.height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.2999 4.70023L4.70025 11.2999M4.7002 4.70016L11.2999 11.2998"
        stroke="#111111"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default XsquareIcon;
