import * as React from "react";
import { withFormik, InjectedFormikProps, Form } from "formik";
import { DestinationAddForm } from "src/states/destinations-state";
import Input from "src/components/atoms/input";
import Button from "src/components/atoms/button";

interface FormProps {
  title?: string;
  goal?: number;
  onSubmit: (entity: DestinationAddForm) => any;
}

const DestinationAddition: React.SFC<
  InjectedFormikProps<FormProps, DestinationAddForm>
> = ({ values, handleChange, handleSubmit }) => (
  <Form>
    <Input
      type="text"
      name="title"
      label="Title"
      required
      onChange={handleChange}
      value={values.title}
    />
    <Button icon="send" onClick={handleSubmit} />
  </Form>
);

export default withFormik<FormProps, DestinationAddForm>({
  mapPropsToValues: () => ({ title: "", goal: 0 }),
  handleSubmit: (values, { props }) => {
    props.onSubmit(values);
  }
})(DestinationAddition);
