import { FC } from "react";
import { Modal, Text } from "src/atoms";
import SC from "./styles";

type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const InstructionsModal: FC<Props> = ({ visible, setVisible }) => {
  return (
    <Modal
      visible={visible}
      close={() => setVisible(false)}
      title="Instructions"
    >
      <SC.Wrapper>
        <ul>
          <li>
            <Text>Each team is assigned 5 robots</Text>
          </li>
          <li>
            <Text>Robots are fetched from the API provided</Text>
          </li>
          <li>
            <Text>Robots which are out of order can’t dance</Text>
          </li>
          <li>
            <Text>
              The total experience of each team can’t exceed 50 points (The
              total experience is the sum of the experience property of each
              team member)
            </Text>
          </li>
          <li>
            <Text>
              Each robot dances against another robot of the opponent team in a
              dance-off
            </Text>
          </li>
          <li>
            <Text>For each dance-off, the system picks a winner randomly</Text>
          </li>
          <li>
            <Text>In total, 5 dance-offs take place</Text>
          </li>
          <li>
            <Text>
              The dance-off results should be sent to the backend using the API
              provided
            </Text>
          </li>
          <li>
            <Text>
              The leaderboard should ONLY be accessible if at least one
              competition has been finished
            </Text>
          </li>
        </ul>
      </SC.Wrapper>
    </Modal>
  );
};

export default InstructionsModal;
