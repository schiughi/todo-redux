import * as React from "react";
import Base from "react-toolbox/lib/button";

export interface Props {
  onClick: (e: any) => any;
  icon?: string;
  label?: string;
  floating?: boolean;
}

const Button: React.SFC<Props> = props => <Base {...props} />;

export default Button;
