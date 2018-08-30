import * as React from "react";
import Base from "react-toolbox/lib/dialog";

export interface DialogProps {
  active: boolean;
  children: React.ReactNode;
  className?: string;
  type?: "small" | "normal" | "large" | "fullscreen";
  title?: string;
  onOverlayClick?: () => any;
}

const Dialog: React.SFC<DialogProps> = ({ active, children, ...props }) => (
  <Base active={active} {...props}>
    {children}
  </Base>
);

export default Dialog;
