import { useEffect } from "react";
import { Layout, Link } from "src/atoms";
import { ResetButton } from "src/components";
import { useStateWithLocalStorage } from "src/hooks";
import { AppStates, StorageKeys } from "src/constants";
import Home from "./home";
import Main from "./main";

const Pages = () => {
  const [appState, setAppState] = useStateWithLocalStorage(
    StorageKeys.APP_STATE
  );

  useEffect(() => {
    if (!appState) setAppState(AppStates.HOME);
  }, [appState, setAppState]);

  const RulesBtn = <Link onClick={() => console.log("Rules")}>Rules</Link>;

  const renderScreen = (state: string) => {
    switch (state) {
      case AppStates.HOME:
        return (
          <Layout>
            <Home setAppState={setAppState} />
          </Layout>
        );

      case AppStates.SET_NAME:
        return (
          <Layout
            title={
              <>
                <ResetButton />
                {RulesBtn}
              </>
            }
          >
            <Main />
          </Layout>
        );

      default:
        return (
          <Layout>
            <Home setAppState={setAppState} />
          </Layout>
        );
    }
  };

  return renderScreen(appState);
};

export default Pages;
