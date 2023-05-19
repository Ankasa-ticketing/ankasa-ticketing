import { Form } from "react-bootstrap";
import Label from "../../elements/label/Label";
import "./FormRegister.css";
import Logo from "../../elements/logo/Logo";
import PrimaryButton from "../../elements/button/ButtonSubmit";
import { Link } from "react-router-dom";

const FormRegister = () => {
  return (
    <>
      <Form>
        <Logo />
        <h2 className="my-3" style={{ fontFamily: "Poopins" }}>
          Register
        </h2>
        <Form.Group className="group">
          <Form.Control className="input" type="text" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <Form.Label htmlFor="name">Full Name</Form.Label>
        </Form.Group>

        <Form.Group className="group">
          <Form.Control className="input" type="email" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <Form.Label htmlFor="email">Email</Form.Label>
        </Form.Group>

        <Form.Group className="group">
          <Form.Control className="input" type="password" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <Form.Label htmlFor="password">Password</Form.Label>
        </Form.Group>

        <PrimaryButton>Sign Up</PrimaryButton>
        <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
          <input
            type="checkbox"
            id="isChecked"
            name="isChecked"
            aria-label="Checkbox for agreeing to terms and conditions"
          />
          <Label htmlFor="isChecked">Accept terms and conditions</Label>
        </Form.Group>

        <div style={{ borderBottom: "1px solid black" }}></div>

        <p className="my-3 text-center">Already have an account?</p>

        <button
          type="button"
          style={{
            backgroundColor: "transparent",
            color: "#2395FF",
            borderRadius: "5px",
            border: "1px solid #2395FF",
          }}
          className="my-2 fw-bold w-100 p-2"
        >
          <Link to="/login" className="text-decoration-none">
            Sign In
          </Link>
        </button>
      </Form>
    </>
  );
};

export default FormRegister;
