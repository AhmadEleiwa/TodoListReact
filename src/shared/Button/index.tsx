import "./style.css";
import { useTheme } from "../../contexts/Theme";
import React, { MouseEventHandler, ReactNode } from "react";

interface Props {
  className: String;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children:ReactNode;
}

const Button = ({ className, onClick, children }: Props) => {
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