import * as React from "react";
import * as moment from "moment";
import "moment-duration-format";
import * as styles from "./styles.css";
import { InputProps } from "src/components";
import Input from "src/components/atoms/input";
import Counter from "src/components/atoms/counter";
import Dialog from "src/components/atoms/dialog";

interface State {
  seconds: number;
  minutes: number;
  hours: number;
  isActive: boolean;
}

export interface Props extends InputProps<number> {
  name: string;
  label?: string;
}

class TimerPicker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      isActive: false
    };
  }
  public render() {
    return (
      <React.Fragment>
        <Input
          name={this.props.name}
          value={this.formatedDuration}
          label={this.props.label}
          onFocus={this.toggleDialog}
          onChange={this.toggleDialog}
        />
        <Dialog
          active={this.state.isActive}
          onOverlayClick={this.toggleDialog}
          actions={this.actions}
          type="small"
        >
          <div className={styles.container}>
            <Counter
              name="hours"
              value={this.state.hours}
              min={0}
              onChange={this.handleChange}
              className={styles.counter}
            />{" "}
            :{" "}
            <Counter
              name="minutes"
              value={this.state.minutes}
              min={0}
              onChange={this.handleChange}
              className={styles.counter}
            />{" "}
            :{" "}
            <Counter
              name="seconds"
              value={this.state.seconds}
              min={0}
              onChange={this.handleChange}
              className={styles.counter}
            />
          </div>
        </Dialog>
      </React.Fragment>
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
      ...this.state,
      seconds: changed.seconds(),
      minutes: changed.minutes(),
      hours: Math.floor(changed.asHours())
    });
    this.props.onChange(this.props.name, changed.asSeconds());
  };

  private toggleDialog = () => {
    this.setState({
      ...this.state,
      isActive: !this.state.isActive
    });
  };

  private get actions() {
    return [{ label: "Ok", onClick: this.toggleDialog }];
  }

  private get formatedDuration(): string {
    return moment
      .duration({
        seconds: this.state.seconds,
        minutes: this.state.minutes,
        hours: this.state.hours
      })
      .format("HH:mm:ss", { trim: false });
  }
}

export default TimerPicker;
