import { useState, FC } from "react";
import { useStateWithLocalStorage } from "src/hooks";
import { StorageKeys } from "src/constants";
import { AppStates } from "src/constants";
import { Button } from "src/atoms";
import { MainLayout, TeamNameInput } from "src/components";
import { TeamsInfoType } from "src/types";

type Props = {
  setAppState: (state: string) => void;
};

const Setup: FC<Props> = ({ setAppState }) => {
  const [teamsInfo, setTeamsInfo] = useStateWithLocalStorage(
    StorageKeys.TEAMS_INFO
  );

  const { teamOne, teamTwo } = (
    teamsInfo ? JSON.parse(teamsInfo) : {}
  ) as TeamsInfoType;

  const [teamOneName, setTeamOneName] = useState(teamOne?.name || "");
  const [teamTwoName, setTeamTwoName] = useState(teamTwo?.name || "");

  const onClickSet = () => {
    const info = {
      teamOne: { name: teamOneName || "Team 1" },
      teamTwo: { name: teamTwoName || "Team 2" },
    };

    setTeamsInfo(JSON.stringify(info));
    setTimeout(() => setAppState(AppStates.ASSIGNING_ROBOTS), 0);
  };

  return (
    <MainLayout
      leftContent={
        <TeamNameInput number={1} name={teamOneName} setName={setTeamOneName} />
      }
      rightContent={
        <TeamNameInput number={2} name={teamTwoName} setName={setTeamTwoName} />
      }
      bottomContent={<Button onClick={onClickSet}>Set Team Names</Button>}
    />
  );
};

export default Setup;
