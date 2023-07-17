import { Form } from "react-bootstrap";
import "./ForgotPassword.css";
import Logo from "../../elements/logo/Logo";
import PrimaryButton from "../../elements/button/ButtonSubmit";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Form>
        <Logo />
        <h2 className="my-3" style={{ fontFamily: "Poopins" }}>
          Forgot Password
        </h2>

        <Form.Group className="group">
          <Form.Control className="input" type="email" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <Form.Label htmlFor="email">Email</Form.Label>
        </Form.Group>

        <PrimaryButton>
          <Link
            to="/"
            className="text-decoration-none"
            style={{ color: "white" }}
          >
            Send
          </Link>
        </PrimaryButton>
        <p className="py-2" style={{ fontFamily: "Lato" }}>
          You will get message soon on your email
        </p>
      </Form>
    </>
  );
};

export default ForgotPassword;
