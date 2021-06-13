import { FC, useState } from "react";
import { ResetModal } from "src/components";
import { Link } from "src/atoms";

const ResetButton: FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Link onClick={() => setVisible(true)}>Reset</Link>
      <ResetModal visible={visible} setVisible={setVisible} />
    </>
  );
};

export default ResetButton;
