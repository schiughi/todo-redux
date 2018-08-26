import * as React from "react";
import Base from "react-toolbox/lib/input";

export interface Props {
  type: "text" | "number" | "email" | "tel";
  name: string;
  onChange: (event: React.ChangeEvent) => void;
  value: string;
  label?: string;
  required?: boolean;
}
const Input: React.SFC<Props> = (props: Props) => {
  const handleChange = (value: string, event: React.ChangeEvent) =>
    props.onChange(event);
  return <Base {...props} onChange={handleChange} />;
};
export default Input;
