import { FC, useState } from "react";
import { InstructionsModal } from "src/components";
import { Link } from "src/atoms";

const InstructionsButton: FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Link onClick={() => setVisible(true)}>Instructions</Link>
      <InstructionsModal visible={visible} setVisible={setVisible} />
    </>
  );
};

export default InstructionsButton;
