import "./form-input.style.jsx";
import { Group, Input, Form_input_label } from "./form-input.style";
const FormInput = ({ label, ...otherProps }) => {
  //...直接吃所有的properity
  return (
    <Group>
      <Input {...otherProps} />
      <Form_input_label shrink={otherProps.value.length}>
        {label}
      </Form_input_label>
    </Group>
  );
};

export default FormInput;
