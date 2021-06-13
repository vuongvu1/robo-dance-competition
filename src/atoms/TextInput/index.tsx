import SC from "./styles";

interface Props {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<Props> = ({ value, onChange, placeholder }) => {
  return (
    <SC.Container
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TextInput;
