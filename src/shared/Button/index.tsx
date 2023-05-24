import "./style.css";
import { useTheme } from "../../contexts/Theme";
import React, { FC, MouseEventHandler } from "react";
interface Props extends React.PropsWithChildren {
  className?: String;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = ({ className, onClick, children }) => {
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
