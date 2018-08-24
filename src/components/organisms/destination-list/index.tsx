import * as React from "react";
import { List } from "react-toolbox/lib/list";
import { Destination } from "src/states/destinations-state";
import ListItem from "./list-item";

export interface DestinationList {
  destinations: Destination[];
  onStart: (id: number) => any;
  onStop: (id: number) => any;
}
const DestinationList: React.SFC<DestinationList> = ({
  destinations,
  ...props
}) => (
  <List selectable ripple>
    {destinations.map(it => (
      <ListItem key={it.id} {...it} {...props} />
    ))}
  </List>
);
export default DestinationList;
