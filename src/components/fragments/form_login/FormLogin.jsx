import { Form } from "react-bootstrap";
import "./FormLogin.css";
import Logo from "../../elements/logo/Logo";
import PrimaryButton from "../../elements/button/ButtonSubmit";
import { Link } from "react-router-dom";
import facebook from "../../../assets/logo/Facebook.png";
import google from "../../../assets/logo/Google.png";

const FormLogin = () => {
  return (
    <>
      <Form>
        <Logo />
        <h2 className="my-3" style={{ fontFamily: "Poopins" }}>
          Login
        </h2>
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
        <PrimaryButton>Sign In</PrimaryButton>
        <div className="my-3" style={{ fontFamily: "Lato" }}>
          <p className="text-center mb-0">Did you forgot your password?</p>
          <Link
            to="/forgoted-password"
            style={{ color: "#2395FF" }}
            className="text-decoration-none d-flex justify-content-center"
          >
            Tap here for reset
          </Link>
        </div>
        <div style={{ borderBottom: "1px solid black" }}></div>
        <p className="my-2 text-center" style={{ fontFamily: "Lato" }}>
          Or sign in with
        </p>
        <div className="text-center">
          <button className="p-2 mx-2 btn-sosmed">
            <img src={facebook} alt="" />
          </button>
          <button className="p-2 mx-2 btn-sosmed">
            <img src={google} alt="" />
          </button>
        </div>
      </Form>
    </>
  );
};

export default FormLogin;
