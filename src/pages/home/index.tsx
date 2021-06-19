import { FC, useEffect, useCallback } from "react";
import { Text, Button } from "src/atoms";
import { AppStates } from "src/constants";
import { useKeyPress } from "src/hooks";
import SC from "./styles";

type Props = {
  setAppState: (state: string) => void;
};

const Home: FC<Props> = ({ setAppState }) => {
  const isEnterPressed = useKeyPress("Enter");

  const goToNextPage = useCallback(() => {
    setAppState(AppStates.SET_NAME);
  }, [setAppState]);

  useEffect(() => {
    if (isEnterPressed) goToNextPage();
  }, [isEnterPressed, goToNextPage]);

  return (
    <SC.Container>
      <Text type="h1">The Robo-Dance Championship</Text>
      <Text type="body">Press [Enter]</Text>
      <Button onClick={goToNextPage}>Start Game</Button>
    </SC.Container>
  );
};

export default Home;
