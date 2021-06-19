import { useState, FC, useEffect, useCallback } from "react";
import { useStateWithLocalStorage, useKeyPress } from "src/hooks";
import { StorageKeys, AppStates } from "src/constants";
import { Button, Text } from "src/atoms";
import { MainLayout, TeamNameInput } from "src/components";
import { TeamsInfoType } from "src/types";

type Props = {
  setAppState: (state: string) => void;
};

const Setup: FC<Props> = ({ setAppState }) => {
  const isEnterPressed = useKeyPress("Enter");
  const [teamsInfo, setTeamsInfo] = useStateWithLocalStorage(
    StorageKeys.TEAMS_INFO
  );

  const { teamOne, teamTwo } = (
    teamsInfo ? JSON.parse(teamsInfo) : {}
  ) as TeamsInfoType;

  const [teamOneName, setTeamOneName] = useState(teamOne?.name || "");
  const [teamTwoName, setTeamTwoName] = useState(teamTwo?.name || "");

  const goToNextPage = useCallback(() => {
    const info = {
      teamOne: { name: teamOneName || "Team 1" },
      teamTwo: { name: teamTwoName || "Team 2" },
    };

    setTeamsInfo(JSON.stringify(info));
    setTimeout(() => setAppState(AppStates.ASSIGNING_ROBOTS), 0);
  }, [setAppState, setTeamsInfo, teamOneName, teamTwoName]);

  useEffect(() => {
    if (isEnterPressed) goToNextPage();
  }, [isEnterPressed, goToNextPage]);

  return (
    <MainLayout
      leftContent={
        <TeamNameInput number={1} name={teamOneName} setName={setTeamOneName} />
      }
      rightContent={
        <TeamNameInput number={2} name={teamTwoName} setName={setTeamTwoName} />
      }
      bottomContent={
        <>
          <Text type="body">Press [Enter]</Text>
          <Button onClick={goToNextPage}>Set Team Names</Button>
        </>
      }
    />
  );
};

export default Setup;
