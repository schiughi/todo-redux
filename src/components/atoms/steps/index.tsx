import * as React from "react";
import * as styles from "./styles.css";
import { InputProps } from "src/components/atoms/interfaces";

export interface Props extends InputProps<number> {
  onPlus: (event: React.MouseEvent, name: string, value: number) => any;
  onMinus: (event: React.MouseEvent, name: string, value: number) => any;
  min?: number;
  max?: number;
  step?: number;
}

const Steps: React.SFC<Props> = ({
  onChange,
  onPlus,
  onMinus,
  value,
  step = 1,
  ...props
}) => {
  const handleChange = (event: any) => {
    const newEvent = {
      ...event,
      target: {
        ...event.target,
        [event.target.name]: +event.target.value
      }
    };
    onChange(newEvent);
  };

  const handlePlus = (event: React.MouseEvent) => {
    if (props.max != null && value >= props.max) {
      return;
    }
    onPlus(event, props.name, step);
  };
  const handleMinus = (event: React.MouseEvent) => {
    if (props.min != null && value <= props.min) {
      return;
    }
    onMinus(event, props.name, step);
  };
  return (
    <div>
      <span className={styles.button} role="button" onClick={handlePlus}>
        +
      </span>
      <input
        type="number"
        onChange={handleChange}
        value={value}
        {...props}
        className={styles.input}
      />
      <span className={styles.button} role="button" onClick={handleMinus}>
        -
      </span>
    </div>
  );
};

export default Steps;
