import * as React from "react";
import Input from "src/components/atoms/input";
import TimePicker from "react-toolbox/lib/time_picker";
import withState, { InjectedProps } from "src/components/utils/with-state";

interface State {
  title?: string;
  goal: Date;
}

export type Props = State & InjectedProps;

const DestinationAddition = ({ title, goal, onChange }: Props) => (
  <div>
    <Input name="title" onChange={onChange} value={title} />
    <TimePicker name="goal" onChange={onChange} value={goal} />
  </div>
);

export default withState<State>({
  title: "",
  goal: new Date()
})<{}>(DestinationAddition);
