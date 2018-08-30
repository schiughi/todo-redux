import * as React from "react";
import Base, { InputProps as BaseProps } from "react-toolbox/lib/input";
import { InputProps as CommonProps } from "src/components/interfaces";

export type InputProps = CommonProps<string> & BaseProps;

const Input: React.SFC<InputProps> = (props: InputProps) => {
  const handleChange = (value: string) => props.onChange(props.name, value);
  return <Base {...props} onChange={handleChange} />;
};
export default Input;
