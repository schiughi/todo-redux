import * as React from "react";
import Base from "react-toolbox/lib/input";
import { InputProps } from "src/components/atoms/interfaces";

export interface Props extends InputProps<string> {
  type: "text" | "number" | "email" | "tel";
  name: string;
  label?: string;
  required?: boolean;
}
const Input: React.SFC<Props> = (props: Props) => {
  const handleChange = (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => props.onChange(event);
  return <Base {...props} onChange={handleChange} />;
};
export default Input;
