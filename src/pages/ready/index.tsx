import { FC, useEffect } from "react";
import { useStateWithLocalStorage } from "src/hooks";
import { StorageKeys, AppStates } from "src/constants";
import { Text, Button } from "src/atoms";
import { MainLayout, TeamList } from "src/components";
import { TeamsInfoType } from "src/types";

type Props = {
  setAppState: (state: string) => void;
};

const ReadyScreen: FC<Props> = ({ setAppState }) => {
  const [teamsInfo] = useStateWithLocalStorage(StorageKeys.TEAMS_INFO);
  const [round, setRound] = useStateWithLocalStorage(StorageKeys.ROUND);

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
          <Button onClick={() => setAppState(AppStates.DANCING)}>
            Let's Dance!
          </Button>
        </>
      }
    />
  );
};

export default ReadyScreen;
