export type RobotType = {
  id: number;
  name: string;
  avatar: string;
  outOfOrder: boolean;
  experience: number;
  powermove: string;
};

export type TeamsInfoType = {
  teamOne: {
    name: string;
    robots: RobotType[];
  };
  teamTwo: {
    name: string;
    robots: RobotType[];
  };
};

export type LeaderBoardType = {
  teamOne: number;
  teamTwo: number;
};

export type ResultType = {
  id: number;
  winner: number;
  loser: number;
  danceAt: string;
};
