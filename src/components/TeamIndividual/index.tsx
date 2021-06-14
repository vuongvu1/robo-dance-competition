import { FC } from "react";
import { useTheme } from "styled-components";
import { Text } from "src/atoms";
import RobotDetailLarge from "../RobotDetailLarge";
import { RobotType } from "src/types";
import SC from "./styles";

type Props = {
  name: string;
  robot?: RobotType;
  score: number;
  isWinner?: boolean;
};

const TeamIndividual: FC<Props> = ({ name, robot, score, isWinner }) => {
  const { palette } = useTheme();

  return (
    <SC.Wrapper isWinner={isWinner}>
      <Text type="h2">
        {name} ({score})
      </Text>
      {robot && <RobotDetailLarge {...robot} />}
      <Text type="h3" color={palette.success}>
        {isWinner && "WINNER"}
      </Text>
    </SC.Wrapper>
  );
};

export default TeamIndividual;
