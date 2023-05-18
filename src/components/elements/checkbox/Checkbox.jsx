import { Form } from "react-bootstrap";

const Checkbox = () => {
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          name="isChecked"
          label="I agree to terms and conditions"
        />
      </Form.Group>
    </>
  );
};

export default Checkbox;
