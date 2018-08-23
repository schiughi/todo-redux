import * as React from "react";
import * as Media from "src/components/atoms/media";
import Title from "src/components/atoms/title";
import PlayButton from "src/components/molecules/play-button";
import * as styles from "./list-item.css";

export interface ListItemProps {
  title: string;
  isDoing: boolean;
  id: number;
  onPlay: (e: any) => any;
}

const ListItem: React.SFC<ListItemProps> = props => {
  const toggle = () => props.onPlay(props.id);
  return (
    <Media.Container className={styles.item}>
      <Media.Content>
        <Title>{props.title}</Title>
      </Media.Content>
      <Media.Action>
        <PlayButton playing={props.isDoing} onClick={toggle} />
      </Media.Action>
    </Media.Container>
  );
};

export default ListItem;
