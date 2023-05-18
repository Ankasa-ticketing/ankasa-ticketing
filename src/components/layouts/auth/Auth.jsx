// import React from 'react'
import Hero from "../../elements/hero/Hero";
import { Col, Row } from "react-bootstrap";

const Auth = ({ children }) => {
  return (
    <>
      <Row>
        <Col md={6} className="d-none d-md-block">
          <Hero />
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          {children}
        </Col>
      </Row>
    </>
  );
};

export default Auth;
