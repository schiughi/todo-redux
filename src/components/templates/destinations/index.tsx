import * as React from "react";
import Title from "src/components/atoms/title";
import DestinationList from "src/components/organisms/destination-list";
import { DestinationsActions } from "src/containers/destinations-container";
import { DestinationsState } from "src/states/destinations-state";
import * as styles from "./styles.css";
import DestinationAddition from "src/components/organisms/destination-addition";

export type DestinationsProps = DestinationsState & DestinationsActions;

export const Destinations: React.SFC<DestinationsProps> = (
  props: DestinationsProps
) => (
  <div className={styles.container}>
    <Title>destinations</Title>
    <DestinationList {...props} />
    <DestinationAddition onSubmit={props.onCreate} />
  </div>
);
