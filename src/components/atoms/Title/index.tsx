import classNames from "classnames";
import * as React from "react";
import * as styles from "./styles.css";

export interface TitleProps {
  level?: number;
  children: React.ReactNode;
  className?: string;
}
const Title: React.StatelessComponent<TitleProps> = ({
  level = 2,
  children,
  className,
  ...props
}) => {
  const Tag = `h${level}`;
  return (
    <Tag className={classNames(styles.h, styles[Tag], className)} {...props}>
      {children}
    </Tag>
  );
};

export default Title;
