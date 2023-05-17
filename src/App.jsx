// import React from 'react'
import { Col, Row } from "react-bootstrap";
import OverlayLogin from "./components/OverlayLogin/OverlayLogin";

const App = () => {
  return (
    <>
      <Row>
        <Col md={6}>
          <OverlayLogin />
        </Col>
      </Row>
    </>
  );
};

export default App;
