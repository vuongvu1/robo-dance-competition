import React from "react";
import SC from "./styles";
import { Text } from "..";

interface Props {
  title?: string;
}

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <SC.Container>
      <SC.Header>
        <Text type="h2">{title}</Text>
      </SC.Header>
      <SC.BodyContainer>
        <SC.Body>{children}</SC.Body>
      </SC.BodyContainer>
    </SC.Container>
  );
};

export default Layout;
