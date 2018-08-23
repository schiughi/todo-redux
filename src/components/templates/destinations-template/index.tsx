import * as React from "react";
import Title from "src/components/atoms/title";
import DestinationList from "src/components/organisms/destination-list";
import { DestinationsActions } from "src/containers/destinations-page";
import { DestinationsState } from "src/states/destinations-state";

type DestinationsProps = DestinationsState & DestinationsActions;

export const Destinations: React.SFC<DestinationsProps> = (
  props: DestinationsProps
) => (
  <div>
    <Title>destinations</Title>
    <DestinationList {...props} />
  </div>
);
