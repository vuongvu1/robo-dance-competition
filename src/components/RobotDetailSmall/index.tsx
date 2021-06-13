import { FC } from "react";
import { Text } from "src/atoms";
import SC from "./styles";

type Props = {
  name: string;
  avatar: string;
};

const RobotDetailSmall: FC<Props> = ({ name, avatar }) => {
  return (
    <SC.Wrapper>
      <SC.Image src={avatar} />
      <Text type="body">{name}</Text>
    </SC.Wrapper>
  );
};

export default RobotDetailSmall;
