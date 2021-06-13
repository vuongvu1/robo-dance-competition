import React from "react";
import SC from "./styles";

interface Props {
  onClick: () => void;
}

const Link: React.FC<Props> = ({ onClick, children }) => {
  return <SC.Container onClick={onClick}>{children}</SC.Container>;
};

export default Link;
