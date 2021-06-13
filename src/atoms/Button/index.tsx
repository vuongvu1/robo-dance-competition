import React from "react";
import SC from "./styles";
import { Text } from "..";

interface Props {
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <SC.Container onClick={onClick}>
      <Text>{children}</Text>
    </SC.Container>
  );
};

export default Button;
