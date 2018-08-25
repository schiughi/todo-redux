import * as moment from "moment";
import "moment-duration-format";
import * as React from "react";
import Title from "src/components/atoms/title";

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
  ...props
}) => (
  <Title level={5} {...props}>
    {moment.duration(time, unit).format(format, {
      trim: false
    })}
  </Title>
);

export default ElapsedTime;
