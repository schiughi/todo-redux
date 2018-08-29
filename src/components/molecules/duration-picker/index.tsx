import * as React from "react";
import * as moment from "moment";
import * as styles from "./styles.css";
import { InputProps } from "src/components/atoms/interfaces";
import Steps from "src/components/atoms/steps";

interface State {
  seconds: number;
  minutes: number;
  hours: number;
}

export interface Props extends InputProps<number> {
  name: string;
}

class DurationPicker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0
    };
  }
  public render() {
    return (
      <div className={styles.container}>
        <Steps
          name="hours"
          value={this.state.hours}
          min={0}
          onChange={this.handleChange}
          className={styles.counter}
        />{" "}
        :{" "}
        <Steps
          name="minutes"
          value={this.state.minutes}
          min={0}
          onChange={this.handleChange}
          className={styles.counter}
        />{" "}
        :{" "}
        <Steps
          name="seconds"
          value={this.state.seconds}
          min={0}
          onChange={this.handleChange}
          className={styles.counter}
        />
      </div>
    );
  }
  private handleChange = (name: string, value: number) => {
    const changed: moment.Duration = moment.duration({
      seconds: this.state.seconds,
      minutes: this.state.minutes,
      hours: this.state.hours,
      [name]: value
    });
    this.setState({
      seconds: changed.seconds(),
      minutes: changed.minutes(),
      hours: changed.hours()
    });
    this.props.onChange(this.props.name, changed.asSeconds());
  };
}

export default DurationPicker;
