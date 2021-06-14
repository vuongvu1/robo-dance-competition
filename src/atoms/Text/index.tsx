import React from "react";
import SC from "./styles";

interface Props {
  type?: "h1" | "h2" | "h3" | "body";
  color?: string;
}

const Text: React.FC<Props> = ({ type, color, children }) => {
  return (
    <SC.Container as={type === "body" ? "p" : type} type={type} color={color}>
      {children}
    </SC.Container>
  );
};

export default Text;
