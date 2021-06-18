import { FC, useState } from "react";
import { LeaderboardModal } from "src/components";
import { useStateWithLocalStorage } from "src/hooks";
import { StorageKeys } from "src/constants";
import { Link } from "src/atoms";

const LeaderboardButton: FC = () => {
  const [visible, setVisible] = useState(false);
  const [round] = useStateWithLocalStorage(StorageKeys.ROUND);

  if (!round || round === "1") return null;

  return (
    <>
      <Link onClick={() => setVisible(true)}>Leaderboard</Link>
      <LeaderboardModal visible={visible} setVisible={setVisible} />
    </>
  );
};

export default LeaderboardButton;
