import { useState, FC, useEffect } from "react";
import { useStateWithLocalStorage } from "src/hooks";
import { StorageKeys, AppStates } from "src/constants";
import { Text } from "src/atoms";
import { MainLayout, TeamIndividual } from "src/components";
import { TeamsInfoType, LeaderBoardType } from "src/types";
import { Spinner } from "src/assets/icons";
import { delay, shuffle, getRandomNumbersArray } from "src/utils";

type Props = {
  setAppState: (state: string) => void;
};

const NO_TEAM = -1;
const TEAM_ONE = 0;
const TEAM_TWO = 1;
const TOTAL_ROUNDS = 5;

const DancingScreen: FC<Props> = ({ setAppState }) => {
  const [teamOneCompetingRobot, setTeamOneCompetingRobot] = useState();
  const [teamTwoCompetingRobot, setTeamTwoCompetingRobot] = useState();
  const [winner, setWinner] = useState<number>(NO_TEAM);
  const [score, setScore] = useState(0);

  const [teamsInfo] = useStateWithLocalStorage(StorageKeys.TEAMS_INFO);
  const [round, setRound] = useStateWithLocalStorage(StorageKeys.ROUND);
  const [leaderBoard, setLeaderBoard] = useStateWithLocalStorage(
    StorageKeys.LEADER_BOARD
  );

  if (!teamsInfo) {
    setAppState(AppStates.HOME);
  }

  const { teamOne, teamTwo } = JSON.parse(teamsInfo) as TeamsInfoType;

  useEffect(() => {
    (async () => {
      const teamOneRobots = shuffle(teamOne.robots);
      const teamTwoRobots = shuffle(teamTwo.robots);
      const randomNums = getRandomNumbersArray();

      for (let i = 0; i < TOTAL_ROUNDS; i++) {
        setTeamOneCompetingRobot(teamOneRobots[i]);
        setTeamTwoCompetingRobot(teamTwoRobots[i]);
        await delay(2000);
        const randomWinner = ((randomNums.pop() || 0) + i) % 2;
        setWinner(randomWinner);
        setScore((currentScore) => {
          return randomWinner === TEAM_ONE
            ? currentScore + 10
            : currentScore + 1;
        });
        await delay(2000);
        setWinner(NO_TEAM);
      }

      setRound(`${parseInt(round) + 1}`);
      setTimeout(() => setAppState(AppStates.READY), 0);
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const teamOneScore = Math.floor(score / 10);
  const teamTwoScore = score % 10;

  useEffect(() => {
    if (teamOneScore + teamTwoScore === TOTAL_ROUNDS) {
      const winner = teamOneScore > teamTwoScore ? TEAM_ONE : TEAM_TWO;
      let newLeaderBoard;
      if (leaderBoard) {
        const { teamOne, teamTwo } = JSON.parse(leaderBoard) as LeaderBoardType;
        newLeaderBoard = {
          teamOne: winner === TEAM_ONE ? teamOne + 1 : teamOne,
          teamTwo: winner === TEAM_TWO ? teamTwo + 1 : teamTwo,
        };
      } else {
        newLeaderBoard = {
          teamOne: winner === TEAM_ONE ? 1 : 0,
          teamTwo: winner === TEAM_TWO ? 1 : 0,
        };
      }
      setLeaderBoard(JSON.stringify(newLeaderBoard));
    }
  }, [teamOneScore, teamTwoScore]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MainLayout
      leftContent={
        <TeamIndividual
          name={teamOne.name}
          robot={teamOneCompetingRobot}
          score={teamOneScore}
          isWinner={winner === TEAM_ONE}
        />
      }
      rightContent={
        <TeamIndividual
          name={teamTwo.name}
          robot={teamTwoCompetingRobot}
          score={teamTwoScore}
          isWinner={winner === TEAM_TWO}
        />
      }
      bottomContent={
        <>
          <Spinner />
          <Text type="h2">Dancing...</Text>
        </>
      }
    />
  );
};

export default DancingScreen;
