import { FC, useEffect, useState } from "react";
import { useStateWithLocalStorage } from "src/hooks";
import { StorageKeys } from "src/constants";
import { Modal, Text } from "src/atoms";
import { LeaderBoardType, TeamsInfoType, ResultType } from "src/types";
import { fetchResults } from "src/apis";
import SC from "./styles";

type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const LeaderboardModal: FC<Props> = ({ visible, setVisible }) => {
  const [round] = useStateWithLocalStorage(StorageKeys.ROUND);
  const [leaderboard] = useStateWithLocalStorage(StorageKeys.LEADER_BOARD);
  const [teamsInfo] = useStateWithLocalStorage(StorageKeys.TEAMS_INFO);

  const [latestResults, setLatestResults] = useState<ResultType[]>([]);

  const { teamOne: teamOneScore, teamTwo: teamTwoScore } = JSON.parse(
    leaderboard
  ) as LeaderBoardType;
  const { teamOne: teamOneInfo, teamTwo: teamTwoInfo } = JSON.parse(
    teamsInfo
  ) as TeamsInfoType;

  useEffect(() => {
    (async () => {
      const results = await fetchResults();
      setLatestResults(results.slice(0, 5));
    })();
  }, []);

  const formattedResults = latestResults.map((result) => {
    let teamOne: Record<any, any> = {};
    let teamTwo: Record<any, any> = {};

    const teamOneRobotIds = teamOneInfo.robots.map((robot) => robot.id);
    if (teamOneRobotIds.includes(result.winner)) {
      const robotOne = teamOneInfo.robots.find(
        (robot) => robot.id === result.winner
      );
      const robotTwo = teamTwoInfo.robots.find(
        (robot) => robot.id === result.loser
      );
      teamOne = {
        name: robotOne?.name,
        isWinner: true,
      };
      teamTwo = {
        name: robotTwo?.name,
        isWinner: false,
      };
    } else {
      const robotOne = teamOneInfo.robots.find(
        (robot) => robot.id === result.loser
      );
      const robotTwo = teamTwoInfo.robots.find(
        (robot) => robot.id === result.winner
      );
      teamOne = {
        name: robotOne?.name,
        isWinner: false,
      };
      teamTwo = {
        name: robotTwo?.name,
        isWinner: true,
      };
    }

    return {
      id: result.id,
      danceAt: result.danceAt,
      teamOne,
      teamTwo,
    };
  });

  return (
    <Modal
      visible={visible}
      close={() => setVisible(false)}
      title="LeaderBoard"
    >
      <SC.Wrapper>
        <ul>
          <li>
            <Text type="body">
              <strong>Score</strong>: {teamOneInfo.name} ({teamOneScore}) -{" "}
              {teamTwoInfo.name} ({teamTwoScore})
            </Text>
          </li>
          <li>
            <Text type="body">
              <strong>Finished round(s)</strong>: {parseInt(round) - 1}
            </Text>
          </li>
          <li>
            <Text type="body">
              <strong>Last round</strong>:
            </Text>
          </li>
        </ul>
        <SC.Table>
          <tr>
            <th>{teamOneInfo.name}</th>
            <th>{teamTwoInfo.name}</th>
          </tr>
          {formattedResults.map((result) => (
            <tr key={result.id}>
              <SC.Td isWinner={result.teamOne.isWinner}>
                {result.teamOne.name}
              </SC.Td>
              <SC.Td isWinner={result.teamTwo.isWinner}>
                {result.teamTwo.name}
              </SC.Td>
            </tr>
          ))}
        </SC.Table>
      </SC.Wrapper>
    </Modal>
  );
};

export default LeaderboardModal;
