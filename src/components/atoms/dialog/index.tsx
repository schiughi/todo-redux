import * as React from "react";
import Base, { DialogProps } from "react-toolbox/lib/dialog";

const Dialog: React.SFC<DialogProps> = ({ active, children, ...props }) => (
  <Base active={active} {...props}>
    {children}
  </Base>
);

export default Dialog;
