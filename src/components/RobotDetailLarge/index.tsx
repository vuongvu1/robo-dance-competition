import { FC, useEffect, useState } from "react";
import { Text } from "src/atoms";
import { RobotType } from "src/types";
import SC from "./styles";

const RobotDetailLarge: FC<RobotType> = ({ name, avatar, powermove }) => {
  const [move, setMove] = useState<1 | 2>(1);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setMove((move) => (move === 1 ? 2 : 1));
    }, 200);

    return () => clearInterval(moveInterval);
  }, []);

  return (
    <SC.Wrapper>
      <SC.Image src={avatar} />
      <Text type="h3">{name}</Text>
      <Text type="body">~~ {powermove} ~~</Text>
      <Text type="body">{move === 1 ? "♪┏(・o･)┛♪" : "♪┗ (･o･ ) ┓♪"}</Text>
    </SC.Wrapper>
  );
};

export default RobotDetailLarge;
