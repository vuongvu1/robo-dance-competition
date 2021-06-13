export type RobotType = {
  id: number;
  name: string;
  avatar: string;
};

export type TeamsInfoType = {
  teamOne?: {
    name?: string;
    robots?: RobotType[];
  };
  teamTwo?: {
    name?: string;
    robots?: RobotType[];
  };
};
