"use client";

import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  btnType,
  containerStyle,
  handelClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handelClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
