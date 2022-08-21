import ExampleProvider from "./Example.context";
import { ExampleForm } from "./Example.form";
import { Form } from "./Form";

export const Example = () => {
  return (
    <ExampleForm>
      <ExampleProvider>
        <Form />
      </ExampleProvider>
    </ExampleForm>
  );
};
