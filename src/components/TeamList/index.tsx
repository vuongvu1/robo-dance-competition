import { FC } from "react";
import { Text } from "src/atoms";
import RobotDetailSmall from "../RobotDetailSmall";
import { RobotType } from "src/types";
import SC from "./styles";

type Props = {
  name: string;
  robots: RobotType[];
};

const TeamList: FC<Props> = ({ name, robots }) => {
  return (
    <SC.Wrapper>
      <Text type="h2">{name}</Text>
      {robots.map((robot) => (
        <RobotDetailSmall key={robot.id} {...robot} />
      ))}
    </SC.Wrapper>
  );
};

export default TeamList;
