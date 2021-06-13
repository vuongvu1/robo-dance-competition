import { useStateWithLocalStorage } from "src/hooks";
import { StorageKeys } from "src/constants";
import { Text, Button } from "src/atoms";
import { MainLayout } from "src/components";
// import SC from "./styles";

const Main = () => {
  const [teamsInfo, setTeamsInfo] = useStateWithLocalStorage(
    StorageKeys.TEAMS_INFO
  );

  console.log({ teamsInfo });

  return (
    <MainLayout
      leftContent="leftContent"
      rightContent="rightContent"
      bottomContent={<Button>Set team names</Button>}
    />
  );
};

export default Main;
