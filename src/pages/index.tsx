import { useEffect } from "react";
import { Layout } from "src/atoms";
import {
  ResetButton,
  InstructionsButton,
  LeaderboardButton,
} from "src/components";
import { useStateWithLocalStorage } from "src/hooks";
import { AppStates, StorageKeys } from "src/constants";
import HomeScreen from "./home";
import SetupScreen from "./setup";
import AssigningScreen from "./assigning";
import ReadyScreen from "./ready";
import DancingScreen from "./dancing";

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
          <HomeScreen setAppState={setAppState} />
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
          <SetupScreen setAppState={setAppState} />
        </Layout>
      );

    case AppStates.ASSIGNING_ROBOTS:
      return (
        <Layout>
          <AssigningScreen setAppState={setAppState} />
        </Layout>
      );

    case AppStates.READY:
      return (
        <Layout
          title={
            <>
              <ResetButton />
              <InstructionsButton />
              <LeaderboardButton />
            </>
          }
        >
          <ReadyScreen setAppState={setAppState} />
        </Layout>
      );

    case AppStates.DANCING:
      return (
        <Layout>
          <DancingScreen setAppState={setAppState} />
        </Layout>
      );

    default:
      return (
        <Layout>
          <HomeScreen setAppState={setAppState} />
        </Layout>
      );
  }
};

export default Pages;
