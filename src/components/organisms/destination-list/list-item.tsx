import * as React from "react";
import * as Media from "src/components/atoms/media";
import Caption from "src/components/atoms/caption";
import Title from "src/components/atoms/title";
import Stopwatch from "src/components/organisms/stopwatch";
import ElapsedTime from "src/components/molecules/elapsed-time";
import * as styles from "./list-item.css";

export interface ListItemProps {
  title: string;
  isDoing: boolean;
  id: number;
  totalTime: number;
  goal: number;
  onStart: (e: any) => any;
  onStop: (e: any) => any;
  onRecord: (e: any) => any;
}

const ListItem: React.SFC<ListItemProps> = props => {
  const handleStart = () => props.onStart(props.id);
  const handleStop = () => props.onStop(props.id);
  const handleChange = () => props.onRecord({ id: props.id, time: 1 });
  return (
    <Media.Container className={styles.item}>
      <Media.Content>
        <Title>{props.title}</Title>
        <Caption>
          goal: <ElapsedTime time={props.goal} />
        </Caption>
      </Media.Content>
      <Media.Action>
        <Stopwatch
          isRunning={props.isDoing}
          onStart={handleStart}
          onChange={handleChange}
          onStop={handleStop}
          time={props.totalTime}
        />
      </Media.Action>
    </Media.Container>
  );
};

export default ListItem;
