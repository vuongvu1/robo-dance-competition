import { useState, FC, useEffect } from "react";
import { useStateWithLocalStorage } from "src/hooks";
import { StorageKeys, AppStates } from "src/constants";
import { Text } from "src/atoms";
import { MainLayout, TeamList } from "src/components";
import { TeamsInfoType, RobotType } from "src/types";
import { Spinner } from "src/assets/icons";
import { fetchRobots } from "src/apiClient";

type Props = {
  setAppState: (state: string) => void;
};

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const AssigningScreen: FC<Props> = ({ setAppState }) => {
  const [teamOneRobots, setTeamOneRobots] = useState<RobotType[]>([]);
  const [teamTwoRobots, setTeamTwoRobots] = useState<RobotType[]>([]);

  const [teamsInfo, setTeamsInfo] = useStateWithLocalStorage(
    StorageKeys.TEAMS_INFO
  );

  const { teamOne, teamTwo } = (
    teamsInfo ? JSON.parse(teamsInfo) : {}
  ) as TeamsInfoType;

  useEffect(() => {
    (async () => {
      const allRobots = await fetchRobots();
      // do something

      for (let i = 0; i < 10; i = i + 2) {
        setTeamOneRobots((robots) => robots.concat(allRobots[i]));
        await delay(1000);
        setTeamTwoRobots((robots) => robots.concat(allRobots[i + 1]));
        await delay(1000);
      }

      setAppState(AppStates.ROBOTS_ASSIGNED);
    })();
  }, [setAppState]);

  useEffect(() => {
    const parsedTeamsInfo = JSON.parse(teamsInfo) as TeamsInfoType;

    const newTeamInfo = {
      teamOne: {
        ...parsedTeamsInfo.teamOne,
        robots: teamOneRobots,
      },
      teamTwo: {
        ...parsedTeamsInfo.teamTwo,
        robots: teamTwoRobots,
      },
    };

    setTeamsInfo(JSON.stringify(newTeamInfo));
  }, [teamsInfo, setTeamsInfo, teamOneRobots, teamTwoRobots]);

  return (
    <MainLayout
      leftContent={
        <TeamList name={teamOne?.name || "Team 1"} robots={teamOneRobots} />
      }
      rightContent={
        <TeamList name={teamTwo?.name || "Team 2"} robots={teamTwoRobots} />
      }
      bottomContent={
        <>
          <Spinner />
          <Text type="h2">Assigning Robots...</Text>
        </>
      }
    />
  );
};

export default AssigningScreen;
