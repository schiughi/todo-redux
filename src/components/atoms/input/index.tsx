import * as React from "react";
import Base from "react-toolbox/lib/input";
import { InputProps } from "src/components/interfaces";

export interface Props extends InputProps<string> {
  type: "text" | "number" | "email" | "tel";
  name: string;
  label?: string;
  required?: boolean;
}
const Input: React.SFC<Props> = (props: Props) => {
  const handleChange = (value: string) => props.onChange(props.name, value);
  return <Base {...props} onChange={handleChange} />;
};
export default Input;
