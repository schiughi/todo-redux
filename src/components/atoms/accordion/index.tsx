import * as React from "react";
import classNames from "classnames";
import * as styles from "./styles.css";

export interface AccordionTitleProps {
  children: React.ReactNode | string;
  onToggle: () => any;
  className?: string;
}

const AccordionTitle: React.SFC<AccordionTitleProps> = ({
  children,
  className,
  onToggle,
  ...props
}) => (
  <div
    className={classNames(className, styles.title)}
    {...props}
    role="button"
    onClick={onToggle}
  >
    {children}
  </div>
);

export interface AccordionBodyProps {
  children: React.ReactNode;
  expanded: boolean;
}

const AccordionBody: React.SFC<AccordionBodyProps> = ({
  children,
  expanded
}) => (
  <div
    className={classNames(styles.body, {
      [styles.isVisible]: expanded
    })}
  >
    {children}
  </div>
);

export { AccordionTitle, AccordionBody };
