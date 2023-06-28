"use client";

import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyle,
  handelClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handelClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
