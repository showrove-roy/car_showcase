import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyle?: string;
    handelClick?:MouseEventHandler<HTMLButtonElement>;
}