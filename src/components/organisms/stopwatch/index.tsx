import * as React from "react";
import ElapsedTime from "src/components/molecules/elapsed-time";
import PlayButton from "src/components/molecules/play-button";
import * as styles from "./styles.css";

export interface StopwatchProps {
  isDoing: boolean;
  onClick: (e: any) => any;
  totalTime: number;
}

const Stopwatch: React.SFC<StopwatchProps> = ({
  isDoing,
  onClick,
  totalTime
}) => (
  <div className={styles.container}>
    <PlayButton playing={isDoing} onClick={onClick} />
    <ElapsedTime time={totalTime} />
  </div>
);

export default Stopwatch;
