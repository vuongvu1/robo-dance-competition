import React from "react";
import SC from "./styles";

interface Props {
  type?: "h1" | "h2" | "body";
  color?: string;
}

const Text: React.FC<Props> = ({ type, color, children }) => {
  return (
    <SC.Container as={type || "div"} type={type} color={color}>
      {children}
    </SC.Container>
  );
};

export default Text;
