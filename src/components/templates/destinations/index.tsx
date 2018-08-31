import * as React from "react";
import Title from "src/components/atoms/title";
import DestinationList from "src/components/organisms/destination-list";
import { DestinationsActions } from "src/containers/destinations-container";
import { DestinationsState } from "src/states/destinations-state";
import * as styles from "./styles.css";
import DestinationAddition from "src/components/organisms/destination-addition";
import * as Accordion from "src/components/atoms/accordion";

export type DestinationsProps = DestinationsState & DestinationsActions;

interface State {
  isAdditionActive: boolean;
}

class Destinations extends React.Component<DestinationsProps, State> {
  constructor(props: DestinationsProps) {
    super(props);
    this.state = {
      isAdditionActive: false
    };
  }
  public render() {
    return (
      <div className={styles.container}>
        <Title>destinations</Title>
        <DestinationList {...this.props} />
        <Accordion.AccordionTitle onToggle={this.toggle}>
          Add
        </Accordion.AccordionTitle>
        <Accordion.AccordionBody expanded={this.state.isAdditionActive}>
          <DestinationAddition onSubmit={this.props.onCreate} />
        </Accordion.AccordionBody>
      </div>
    );
  }

  private toggle = () => {
    this.setState({
      isAdditionActive: !this.state.isAdditionActive
    });
  };
}

export { Destinations };
