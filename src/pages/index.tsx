import { useEffect } from "react";
import { Layout, Link } from "src/atoms";
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

  const ResetBtn = <Link onClick={() => console.log("Reset")}>Reset</Link>;
  const RulesBtn = <Link onClick={() => console.log("Rules")}>Rules</Link>;

  const renderPages = (state: string) => {
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
                {ResetBtn}
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

  return renderPages(appState);
};

export default Pages;
