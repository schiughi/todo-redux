import * as React from "react";
import * as styles from "./styles.css";

export interface ButtonProps {
  children: React.ReactNode | string;
  className?: string;
  priority?: "default" | "primary" | "secondary";
  onClick: (e: any) => void;
}

const Button: React.StatelessComponent<ButtonProps> = ({
  priority = "default",
  children,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={[styles.button, styles[priority], className].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  priority: "default"
};

export default Button;
