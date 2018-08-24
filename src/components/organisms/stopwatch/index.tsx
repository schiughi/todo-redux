import * as React from "react";
import ElapsedTime from "src/components/molecules/elapsed-time";
import PlayButton from "src/components/molecules/play-button";
import * as styles from "./styles.css";

export interface StopwatchProps {
  isRunning: boolean;
  interval?: number;
  onStart: () => any;
  onStop: () => any;
  onChange: () => any;
  time: number;
}

let timer: NodeJS.Timer;

const Stopwatch: React.SFC<StopwatchProps> = ({
  isRunning,
  time,
  interval = 1000,
  ...props
}) => {
  const handleClick = (e: any) => {
    clearInterval(timer);
    if (isRunning) {
      props.onStop();
    } else {
      timer = setInterval(() => props.onChange(), interval);
      props.onStart();
    }
  };
  return (
    <div className={styles.container}>
      <PlayButton playing={isRunning} onClick={handleClick} />
      <ElapsedTime time={time} />
    </div>
  );
};

export default Stopwatch;
