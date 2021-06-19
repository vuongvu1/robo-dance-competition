import { FC, useEffect, useCallback } from "react";
import { useStateWithLocalStorage, useKeyPress } from "src/hooks";
import { StorageKeys, AppStates } from "src/constants";
import { Text, Button } from "src/atoms";
import { MainLayout, TeamList } from "src/components";
import { TeamsInfoType } from "src/types";

type Props = {
  setAppState: (state: string) => void;
};

const ReadyScreen: FC<Props> = ({ setAppState }) => {
  const isEnterPressed = useKeyPress("Enter");
  const [teamsInfo] = useStateWithLocalStorage(StorageKeys.TEAMS_INFO);
  const [round, setRound] = useStateWithLocalStorage(StorageKeys.ROUND);

  const goToNextPage = useCallback(() => {
    setAppState(AppStates.DANCING);
  }, [setAppState]);

  useEffect(() => {
    if (isEnterPressed) goToNextPage();
  }, [isEnterPressed, goToNextPage]);

  useEffect(() => {
    if (!round) setRound("1");
  }, [round, setRound]);

  const { teamOne, teamTwo } = (
    teamsInfo ? JSON.parse(teamsInfo) : {}
  ) as TeamsInfoType;

  return (
    <MainLayout
      leftContent={
        <TeamList
          name={teamOne?.name || "Team 1"}
          robots={teamOne?.robots || []}
        />
      }
      rightContent={
        <TeamList
          name={teamTwo?.name || "Team 2"}
          robots={teamTwo?.robots || []}
        />
      }
      bottomContent={
        <>
          <Text type="h2">Round {round}</Text>
          <Text type="body">Press [Enter]</Text>
          <Button onClick={goToNextPage}>Let's Dance!</Button>
        </>
      }
    />
  );
};

export default ReadyScreen;
