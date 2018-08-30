import * as React from "react";
import { withFormik, InjectedFormikProps, Form } from "formik";
import { DestinationAddForm } from "src/states/destinations-state";
import Input from "src/components/atoms/input";
import DurationPicker from "src/components/molecules/duration-picker";
import Button from "src/components/atoms/button";

interface FormProps {
  title?: string;
  goal?: number;
  onSubmit: (entity: DestinationAddForm) => any;
}

const DestinationAddition: React.SFC<
  InjectedFormikProps<FormProps, DestinationAddForm>
> = ({ values, handleSubmit, setFieldValue }) => (
  <Form>
    <Input
      type="text"
      name="title"
      label="Title"
      required
      onChange={setFieldValue}
      value={values.title}
    />
    <DurationPicker
      name="goal"
      label="Goal"
      value={values.goal}
      onChange={setFieldValue}
    />
    {JSON.stringify(values)}
    <Button icon="send" onClick={handleSubmit} />
  </Form>
);

export default withFormik<FormProps, DestinationAddForm>({
  mapPropsToValues: () => ({ title: "", goal: 0 }),
  handleSubmit: (values, { props }) => {
    props.onSubmit(values);
  }
})(DestinationAddition);
