import * as React from "react";
import * as Media from "src/components/atoms/media";
import Title from "src/components/atoms/title";
import Stopwatch from "src/components/organisms/stopwatch";
import * as styles from "./list-item.css";

export interface ListItemProps {
  title: string;
  isDoing: boolean;
  id: number;
  totalTime: number;
  onStart: (e: any) => any;
  onStop: (e: any) => any;
}

const ListItem: React.SFC<ListItemProps> = props => {
  const toggle = () =>
    props.isDoing ? props.onStop(props.id) : props.onStart(props.id);
  return (
    <Media.Container className={styles.item}>
      <Media.Content>
        <Title>{props.title}</Title>
      </Media.Content>
      <Media.Action>
        <Stopwatch
          isDoing={props.isDoing}
          onClick={toggle}
          totalTime={props.totalTime}
        />
      </Media.Action>
    </Media.Container>
  );
};

export default ListItem;
