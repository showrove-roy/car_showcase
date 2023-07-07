import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType?: "button" | "submit";
  containerStyle?: string;
  handelClick?: MouseEventHandler<HTMLButtonElement>;
}
