import * as React from "react";
import classNames from "classnames";
import * as styles from "./styles.css";

export interface CaptionProps {
  children: React.ReactNode | string;
  className?: string;
}
const Caption: React.SFC<CaptionProps> = ({ children, className }) => (
  <p className={classNames(styles.caption, className)}>{children}</p>
);

export default Caption;
