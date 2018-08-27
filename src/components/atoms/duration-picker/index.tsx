import * as React from "react";
import * as moment from "moment";

interface DurationPickerTarget {
  name: string;
  value: number;
}

interface State {
  seconds: number;
  minutes: number;
  hours: number;
}

export interface Props {
  name: string;
  value: number;
  onChange: (event: React.ChangeEvent<DurationPickerTarget>) => any;
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
      <div>
        <input
          type="number"
          name="hours"
          value={this.state.hours}
          onChange={this.handleChange}
        />{" "}
        :{" "}
        <input
          type="number"
          name="minutes"
          value={this.state.minutes}
          onChange={this.handleChange}
        />{" "}
        :{" "}
        <input
          type="number"
          name="seconds"
          value={this.state.seconds}
          onChange={this.handleChange}
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
      target: { name: this.props.name, value: changed }
    };
    this.props.onChange(newEvent);
  };
}

export default DurationPicker;
