import { useState, FC, useEffect } from "react";
import { useStateWithLocalStorage } from "src/hooks";
import { StorageKeys, AppStates } from "src/constants";
import { Text } from "src/atoms";
import { MainLayout, TeamList } from "src/components";
import { TeamsInfoType, RobotType } from "src/types";
import { Spinner } from "src/assets/icons";
import { fetchRobots } from "src/apis";
import { delay, getRandomNumbersArray } from "src/utils";

type Props = {
  setAppState: (state: string) => void;
};

const TOTAl_ROBOTS = 10;

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
      const workingRobots = ((await fetchRobots()) as RobotType[]).filter(
        ({ outOfOrder }) => !outOfOrder
      );

      const randomNums = getRandomNumbersArray();
      let robotIndex = 0;

      for (let i = 0; i < TOTAl_ROBOTS; i++) {
        const setTeamRobots = i % 2 === 0 ? setTeamOneRobots : setTeamTwoRobots;

        // eslint-disable-next-line no-loop-func
        setTeamRobots((robots) => {
          let hasPicked = false;

          const currentRobots = [...robots];
          const randomNum = randomNums.pop() || 1;
          const currentTotalExp = currentRobots.reduce(
            (exp, robot) => exp + robot.experience,
            0
          );

          while (!hasPicked) {
            robotIndex = (robotIndex + randomNum) % workingRobots.length;
            const randomRobot = workingRobots.splice(robotIndex, 1)[0];
            const totalExp = currentTotalExp + randomRobot.experience;
            const safeExp = (currentRobots.length + 1) * 10;
            if (totalExp <= safeExp) {
              currentRobots.push(randomRobot);
              hasPicked = true;
            }
          }

          return currentRobots;
        });

        await delay(1000);
      }

      setAppState(AppStates.READY);
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
