import { Form } from "react-bootstrap";
import LabelName from "../../elements/labelname/LabelName";
import "./FormRegister.css";
import Logo from "../../elements/logo/Logo";
import PrimaryButton from "../../elements/button/ButtonSubmit";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useRegisterUser from "../../../states/useRegisterUser";

const FormRegister = () => {
  const register = useRegisterUser(state => state.register)
  const loading = useRegisterUser(state => state.loading)


  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleOnSubmit = (e) => {
    e.preventDefault()

    register({ fullname, email, password })

    setEmail("")
    setFullname("")
    setPassword("")
    navigate("/login")
  }

  if (loading) {
    return <><p>LOADING.....</p></>
  }

  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <Logo />
        <h2 className="my-3" style={{ fontFamily: "Poopins" }}>
          Register
        </h2>
        <Form.Group className="group">
          <Form.Control className="input" type="text" value={fullname} required onChange={(e) => setFullname(e.target.value)} />
          <span className="highlight"></span>
          <span className="bar"></span>
          <Form.Label htmlFor="name">Fullname</Form.Label>
        </Form.Group>

        <Form.Group className="group">
          <Form.Control className="input" type="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
          <span className="highlight"></span>
          <span className="bar"></span>
          <Form.Label htmlFor="email">Email</Form.Label>
        </Form.Group>

        <Form.Group className="group">
          <Form.Control className="input" type="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
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
          <LabelName htmlFor="isChecked">Accept terms and conditions</LabelName>
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
          className="p-2 my-2 fw-bold w-100"
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
