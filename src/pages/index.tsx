import { useEffect } from "react";
import { Layout } from "src/atoms";
import { ResetButton, InstructionsButton } from "src/components";
import { useStateWithLocalStorage } from "src/hooks";
import { AppStates, StorageKeys } from "src/constants";
import Home from "./home";
import Setup from "./setup";

const Pages = () => {
  const [appState, setAppState] = useStateWithLocalStorage(
    StorageKeys.APP_STATE
  );

  useEffect(() => {
    if (!appState) setAppState(AppStates.HOME);
  }, [appState, setAppState]);

  switch (appState) {
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
              <InstructionsButton />
            </>
          }
        >
          <Setup setAppState={setAppState} />
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

export default Pages;
