import React from "react";
import DefaultIconProps from "./DefaultIconProps";

function RefreshIcon({ size = { width: "16", height: "16" } }: DefaultIconProps) {
  return (
    <svg width={size.width} height={size.height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_85_540)">
        <path
          d="M0.666748 2.66666V6.66666H4.66675"
          stroke="#14142B"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.3333 13.3333V9.33334H11.3333"
          stroke="#14142B"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.6601 6.00001C13.322 5.04453 12.7473 4.19028 11.9898 3.51696C11.2322 2.84363 10.3164 2.37319 9.32789 2.14952C8.33934 1.92584 7.31024 1.95624 6.33662 2.23786C5.363 2.51948 4.47658 3.04315 3.76008 3.76001L0.666748 6.66668M15.3334 9.33334L12.2401 12.24C11.5236 12.9569 10.6372 13.4805 9.66354 13.7622C8.68992 14.0438 7.66082 14.0742 6.67227 13.8505C5.68372 13.6268 4.76795 13.1564 4.01039 12.4831C3.25284 11.8097 2.67819 10.9555 2.34008 10"
          stroke="#14142B"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_85_540">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default RefreshIcon;
