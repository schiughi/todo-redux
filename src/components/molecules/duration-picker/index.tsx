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
          onPlus={this.handlePlus}
          onMinus={this.handleMinus}
        />{" "}
        :{" "}
        <Steps
          name="minutes"
          value={this.state.minutes}
          min={0}
          onChange={this.handleChange}
          onPlus={this.handlePlus}
          onMinus={this.handleMinus}
        />{" "}
        :{" "}
        <Steps
          name="seconds"
          value={this.state.seconds}
          min={0}
          onChange={this.handleChange}
          onPlus={this.handlePlus}
          onMinus={this.handleMinus}
        />
      </div>
    );
  }
  private handleChange = (event: any) => {
    this.setState({
      ...this.state,
      [event.target.name]: +event.target.value
    });
    const changed: number = moment
      .duration({
        seconds: this.state.seconds,
        minutes: this.state.minutes,
        hours: this.state.hours,
        [event.target.name]: +event.target.value
      })
      .asSeconds();
    const newEvent = {
      ...event,
      target: { ...event.target, name: this.props.name, value: changed }
    };
    this.props.onChange(newEvent);
  };

  private handlePlus = (event: React.MouseEvent, name: any, step: number) => {
    const changed: moment.Duration = this.duration.add(step, name);
    this.setState({
      ...this.state,
      seconds: changed.seconds(),
      minutes: changed.minutes(),
      hours: changed.hours()
    });
  };

  private handleMinus = (event: React.MouseEvent, name: any, step: number) => {
    const changed: moment.Duration = this.duration.subtract(step, name);
    this.setState({
      ...this.state,
      seconds: changed.seconds(),
      minutes: changed.minutes(),
      hours: changed.hours()
    });
  };

  private get duration() {
    return moment.duration({
      seconds: this.state.seconds,
      minutes: this.state.minutes,
      hours: this.state.hours
    });
  }
}

export default DurationPicker;
