import DefaultIconProps from "./DefaultIconProps";

function TrashIcon({ size = { width: "16", height: "16" } }: DefaultIconProps) {
  return (
    <svg width={size.width} height={size.height} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4H3.33333H14" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M5.33325 3.99998V2.66665C5.33325 2.31302 5.47373 1.97389 5.72378 1.72384C5.97383 1.47379 6.31296 1.33331 6.66659 1.33331H9.33325C9.68687 1.33331 10.026 1.47379 10.2761 1.72384C10.5261 1.97389 10.6666 2.31302 10.6666 2.66665V3.99998M12.6666 3.99998V13.3333C12.6666 13.6869 12.5261 14.0261 12.2761 14.2761C12.026 14.5262 11.6869 14.6666 11.3333 14.6666H4.66659C4.31296 14.6666 3.97382 14.5262 3.72378 14.2761C3.47373 14.0261 3.33325 13.6869 3.33325 13.3333V3.99998H12.6666Z"
        stroke="#111111"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66675 7.33331V11.3333"
        stroke="#111111"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33325 7.33331V11.3333"
        stroke="#111111"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TrashIcon;
