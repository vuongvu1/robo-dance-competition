import { ReactNode, FC } from "react";
import SC from "./styles";

interface Props {
  title?: ReactNode;
}

const Layout: FC<Props> = ({ title, children }) => {
  return (
    <SC.Container>
      <SC.Header>{title}</SC.Header>
      <SC.BodyContainer>
        <SC.Body>{children}</SC.Body>
      </SC.BodyContainer>
    </SC.Container>
  );
};

export default Layout;
