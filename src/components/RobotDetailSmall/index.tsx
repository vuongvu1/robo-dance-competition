import { FC } from "react";
import { Text } from "src/atoms";
import { RobotType } from "src/types";
import SC from "./styles";

const RobotDetailSmall: FC<RobotType> = ({ name, avatar, experience }) => {
  return (
    <SC.Wrapper>
      <SC.Image src={avatar} />
      <Text type="body">
        {name} (exp: {experience})
      </Text>
    </SC.Wrapper>
  );
};

export default RobotDetailSmall;
