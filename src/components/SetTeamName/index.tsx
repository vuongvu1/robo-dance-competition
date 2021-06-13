import { FC } from "react";
import { Text, TextInput } from "src/atoms";
import SC from "./styles";

type Props = {
  number: 1 | 2;
  name: string;
  setName: (name: string) => void;
};

const SetTeamName: FC<Props> = ({ number, name, setName }) => {
  return (
    <SC.Wrapper>
      <Text type="h2">Team {number}</Text>
      <TextInput
        placeholder={`Team ${number}`}
        value={name}
        onChange={setName}
      />
    </SC.Wrapper>
  );
};

export default SetTeamName;
