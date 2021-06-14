import { FC, ReactNode } from "react";
import { Text } from "src/atoms";
import SC from "./styles";

type Props = {
  leftContent: ReactNode;
  rightContent: ReactNode;
  bottomContent: ReactNode;
};

const MainLayout: FC<Props> = ({
  leftContent,
  rightContent,
  bottomContent,
}) => {
  return (
    <SC.Wrapper>
      <SC.TeamsWrapper>
        <SC.Team>{leftContent}</SC.Team>
        <SC.MiddleText>
          <Text type="h3">VS</Text>
        </SC.MiddleText>
        <SC.Team>{rightContent}</SC.Team>
      </SC.TeamsWrapper>
      <SC.BottomSection>{bottomContent}</SC.BottomSection>
    </SC.Wrapper>
  );
};

export default MainLayout;
