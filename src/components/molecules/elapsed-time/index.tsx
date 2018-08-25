import * as moment from "moment";
import "moment-duration-format";
import * as React from "react";
import * as styles from "./styles.css";
import classNames from "classnames";

export interface ElapsedTimeProps {
  time: number;
  unit?:
    | "seconds"
    | "minutes"
    | "hours"
    | "years"
    | "months"
    | "weeks"
    | "days";
  format?: string;
  className?: string;
}

const ElapsedTime: React.SFC<ElapsedTimeProps> = ({
  time,
  unit = "seconds",
  format = "HH:mm:ss",
  className,
  ...props
}) => (
  <span className={classNames(styles.time, className)} {...props}>
    {moment.duration(time, unit).format(format, {
      trim: false
    })}
  </span>
);

export default ElapsedTime;
