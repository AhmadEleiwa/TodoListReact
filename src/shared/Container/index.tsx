import "./style.css";
import { useTheme } from "../../contexts/Theme";
import React, { FC, PropsWithChildren } from "react";
const Container: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  return (
    <div
      className="container"
      style={{ background: theme.pallete.backgroundPaper, height: "100vh" }}
    >
      {children}
    </div>
  );
};

export default Container;
