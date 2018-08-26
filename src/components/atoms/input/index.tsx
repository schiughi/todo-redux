import * as React from "react";
import BaseInput from "react-toolbox/lib/input";

interface Props {
  name: string;
  onChange: (target: any) => void;
  value?: string;
}
const Input = (props: Props) => {
  const handleChange = (value: string) => {
    props.onChange({
      name: props.name,
      value
    });
  };
  return <BaseInput {...props} onChange={handleChange} />;
};

export default Input;
