import { FC, useState } from "react";
import { ResetModal } from "src/components";
import { Link } from "src/atoms";

const ResetButton: FC = () => {
  const [resetModalVisible, setResetModalVisible] = useState(false);

  return (
    <>
      <Link onClick={() => setResetModalVisible(true)}>Reset</Link>
      <ResetModal
        visible={resetModalVisible}
        setVisible={setResetModalVisible}
      />
    </>
  );
};

export default ResetButton;
