import { FC } from "react";
import { Modal, Button } from "src/atoms";
import SC from "./styles";

type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const ResetModal: FC<Props> = ({ visible, setVisible }) => {
  const reset = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Modal
      visible={visible}
      close={() => setVisible(false)}
      title="Are you sure you want to reset?"
    >
      <SC.Wrapper>
        <Button onClick={reset}>Accept</Button>
      </SC.Wrapper>
    </Modal>
  );
};

export default ResetModal;
