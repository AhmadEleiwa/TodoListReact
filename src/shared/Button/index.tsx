import "./style.css";
import { useTheme } from "../../contexts/Theme";
import React, { FC, MouseEventHandler, ReactNode } from "react";

type Props = {
  className: String,
  onClick: MouseEventHandler<HTMLButtonElement>,
  children:ReactNode,
}


const Button :FC<Props> = ({className, onClick, children}) => {
  const theme = useTheme();
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      style={{ boxShadow: `0 2px 8px 0 ${theme.pallete.dropShadow}` }}
    >
      {children}
    </button>
  );
};

export default Button;