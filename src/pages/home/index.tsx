import { FC } from "react";
import { Text, Button } from "src/atoms";
import { AppStates } from "src/constants";
import SC from "./styles";

type Props = {
  setAppState: (state: string) => void;
};

const Home: FC<Props> = ({ setAppState }) => {
  return (
    <SC.Container>
      <Text type="h1">The Robo-Dance Championship</Text>
      <Button onClick={() => setAppState(AppStates.SET_NAME)}>
        Start Game
      </Button>
    </SC.Container>
  );
};

export default Home;
