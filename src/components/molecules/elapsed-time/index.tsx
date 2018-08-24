import * as moment from "moment";
import "moment-duration-format";
import * as React from "react";
import Title from "src/components/atoms/title";

export interface ElapsedTimeProps {
  time: number;
}

const ElapsedTime: React.SFC<ElapsedTimeProps> = ({ time, ...props }) => (
  <Title level={5}>{moment.duration(time, "seconds").format("H:mm:ss")}</Title>
);

export default ElapsedTime;
