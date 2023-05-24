import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import { useTheme } from "../../../contexts/Theme";
import React, { PropsWithChildren, FC } from "react";
const Siwtch: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();

  const siwtchHandler = (e) => {
    theme.switchHandler();
  };

  return (
    <div
      className="switch"
      onClick={siwtchHandler}
      style={{ backgroundColor: theme.pallete.disabled }}
    >
      <div
        className="thumb"
        style={{
          left: theme.mode ? "50%" : "0",
          backgroundColor: theme.pallete.main,
        }}
      ></div>
      <FontAwesomeIcon className="icon" icon={faSun} color="white" />
      <FontAwesomeIcon className="icon" icon={faMoon} color="white" />
    </div>
  );
};

export default Siwtch;
