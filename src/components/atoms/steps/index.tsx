import * as React from "react";
import * as styles from "./styles.css";
import { InputProps } from "src/components/atoms/interfaces";

export interface Props extends InputProps<number> {
  min?: number;
  max?: number;
  step?: number;
}

const Steps: React.SFC<Props> = ({ onChange, value, step = 1, ...props }) => {
  const handleChange = (event: any) => {
    onChange(props.name, +event.target.value);
  };

  const handlePlus = (event: React.MouseEvent) => {
    if (props.max != null && value >= props.max) {
      return;
    }
    onChange(props.name, value + step);
  };
  const handleMinus = (event: React.MouseEvent) => {
    if (props.min != null && value <= props.min) {
      return;
    }
    onChange(props.name, value - step);
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
