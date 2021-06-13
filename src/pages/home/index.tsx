import { Layout, Text, Button } from "src/atoms";
import SC from "./styles";

const Home = () => {
  return (
    <Layout>
      <SC.Container>
        <Text type="h1">The Robo-Dance Championship</Text>
        <Button>Start Game</Button>
      </SC.Container>
    </Layout>
  );
};

export default Home;
