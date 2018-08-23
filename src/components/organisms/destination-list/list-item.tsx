import * as React from "react";
import * as Media from "src/components/atoms/media";
import Title from "src/components/atoms/title";
import PlayButton from "src/components/molecules/play-button";

export interface ListItemProps {
  title: string;
  isDoing: boolean;
  id: number;
  onPlay: (e: any) => any;
}

const ListItem: React.SFC<ListItemProps> = props => {
  const toggle = () => props.onPlay(props.id);
  return (
    <Media.Container>
      <Media.Headig>
        <PlayButton playing={props.isDoing} onClick={toggle} />
      </Media.Headig>
      <Media.Body>
        <Title>{props.title}</Title>
      </Media.Body>
    </Media.Container>
  );
};

export default ListItem;
