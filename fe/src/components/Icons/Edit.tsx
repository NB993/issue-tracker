import React from "react";
import DefaultIconProps from "./DefaultIconProps";

function EditIcon({ size = { width: "16", height: "16" } }: DefaultIconProps) {
  return (
    <svg width={size.width} height={size.height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.3333 9.77335V13.3334C13.3333 13.687 13.1928 14.0261 12.9427 14.2762C12.6927 14.5262 12.3535 14.6667 11.9999 14.6667H2.66659C2.31296 14.6667 1.97382 14.5262 1.72378 14.2762C1.47373 14.0261 1.33325 13.687 1.33325 13.3334V4.00002C1.33325 3.6464 1.47373 3.30726 1.72378 3.05721C1.97382 2.80716 2.31296 2.66669 2.66659 2.66669H6.22659"
        stroke="#111111"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9999 1.33331L14.6666 3.99998L7.99992 10.6666H5.33325V7.99998L11.9999 1.33331Z"
        stroke="#111111"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default EditIcon;
