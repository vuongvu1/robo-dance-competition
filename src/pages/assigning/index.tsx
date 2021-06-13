import { useState, FC, useEffect } from "react";
import { useStateWithLocalStorage } from "src/hooks";
import { StorageKeys } from "src/constants";
import { Text } from "src/atoms";
import { MainLayout, TeamList } from "src/components";
import { TeamsInfoType } from "src/types";
import { Spinner } from "src/assets/icons";

type Props = {
  setAppState: (state: string) => void;
};

const AssigningScreen: FC<Props> = ({ setAppState }) => {
  const [teamsInfo] = useStateWithLocalStorage(StorageKeys.TEAMS_INFO);

  const { teamOne, teamTwo } = (
    teamsInfo ? JSON.parse(teamsInfo) : {}
  ) as TeamsInfoType;

  useEffect(() => {}, []);

  const robots = [
    {
      id: 1,
      name: "Funky Joe 1",
      avatar: "https://robohash.org/funky-joe.png",
    },
    {
      id: 2,
      name: "Funky Joe 2",
      avatar: "https://robohash.org/funky-joe.png",
    },
    {
      id: 3,
      name: "Funky Joe 3",
      avatar: "https://robohash.org/funky-joe.png",
    },
    {
      id: 4,
      name: "Funky Joe 4",
      avatar: "https://robohash.org/funky-joe.png",
    },
    {
      id: 5,
      name: "Funky Joe 5",
      avatar: "https://robohash.org/funky-joe.png",
    },
  ];

  return (
    <MainLayout
      leftContent={
        <TeamList name={teamOne?.name || "Team 1"} robots={robots} />
      }
      rightContent={
        <TeamList name={teamTwo?.name || "Team 1"} robots={robots} />
      }
      bottomContent={
        <>
          <Spinner />
          <Text type="h2">Assigning Robots...</Text>
        </>
      }
    />
  );
};

export default AssigningScreen;
