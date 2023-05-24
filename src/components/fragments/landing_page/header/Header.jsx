import React, { useState } from "react";
import "./Style.css";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import header2 from "../../../../assets/images/Group 55.png";
import header1 from "../../../../assets/images/Group 53.png";
import header3 from "../../../../assets/images/Vector 6.png";
import btn from "../../../../assets/images/btnback.png";
import Vector from "../../../../assets/images/Vector.png";
import plane from "../../../../assets/images/plane.png";
import round from "../../../../assets/images/round.png";
import right from "../../../../assets/images/right.png";

const Header = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Container className="container-fluid mb-5 mt-5">
      <Row className="mt-5 row" style={{}}>
        <Col lg={6} className="text-start header-col mt-5 col">
          <br />
          <div className="d-flex flex-column w-75 mx-auto ">
            <h1
              className=" mt-5"
              style={{ fontSize: "3.380rem", fontWeight: "600" }}
            >
              Find Your <span style={{ color: "#2395FF" }}>Flight</span>
            </h1>
            <p
              className="mt-2 mb-5"
              style={{
                color: "#979797",
                fontSize: "1.130rem",
                fontWeight: "400",
              }}
            >
              and explore the world with us
            </p>
          </div>
          <img
            src={header1}
            alt=""
            className="mt-5 img-fluid img "
            // style={{ width: "1000px" }}
          />
        </Col>
        <Col lg={6} className="header-col d-none d-sm-block ">
          <Col lg={12} className="d-flex justify-content-end ">
            <img src={header2} alt="" className="img-fluid img2 mb-5" />
          </Col>
          <Col lg={12} className="mt-5">
            <img src={header3} alt="" className="mt-5 w-25 mx-auto img3" />
          </Col>
        </Col>
        <Col
          md={3}
          className="position-absolute top-50 start-50 translate-middle-y "
        >
          <div className="me-5">
            <Card
              className="me-5 shadow-lg card-1"
              style={{
                width: "450px",
                right: "65px",
                top: "170px",
                borderRadius: "20px",
              }}
              // style={{ height: "700px", width: "500px", }}
            >
              <Card.Body className="me-5">
                <Col md={12} className="ms-3">
                  <p className="fw-semibold fs-5">Hey,</p>
                  <h4 className="fw-semibold">Where you want to go?</h4>
                  <Row>
                    <Col md={8} className="text-start w-50">
                      <p
                        className="fw-bold blue py-2"
                        style={{ color: "#2395FF" }}
                      >
                        Recently searched
                      </p>
                    </Col>
                    <Col md={4} className="w-25">
                      <img src={btn} alt="" className="mt-3" />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Card className=" mx-auto shadow">
                        <Card.Body>
                          <Row>
                            <Col md={6} className="text-start">
                              <p className="text-muted">From</p>
                            </Col>
                            <Col md={6} className="text-end">
                              <p className="text-muted">To</p>
                            </Col>
                            <Col md={5}>
                              <h4>Medan</h4>
                            </Col>
                            <Col md={2}>
                              {" "}
                              <img src={Vector} alt="" className="mt-2" />
                            </Col>
                            <Col md={5} className="text-end">
                              <h4>Tokyo</h4>
                            </Col>
                            <Col md={6} className="text-start">
                              <p className="">Indonesia</p>
                            </Col>
                            <Col md={6} className="text-end">
                              <p className="">Japan</p>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Row className="mt-4">
                        <Col md={6} className="">
                          <a className="btn btn-primary d-flex">
                            <img
                              src={plane}
                              alt=""
                              className="me-3 ms-4 h-25 mt-1"
                              // style={{ width: "20%" }}
                            />
                            <span className="fw-semibold"> One Way</span>
                          </a>
                        </Col>
                        <Col md={6} className="">
                          <a className="btn btn-light d-flex">
                            <img
                              src={round}
                              alt=""
                              className=" ms-4 me-2 h-25 mt-1"
                            />
                            <span className="ms-2 fw-semibold">Round Trip</span>
                          </a>
                        </Col>
                        <Col md={12} className=" mt-3 mx-auto">
                          <p className="text-muted fw-semibold">Departure</p>
                          <Form.Control
                            type="date"
                            name="datepic"
                            placeholder="DateRange"
                            className="h-50"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className=" mt-3 mx-auto">
                          <p className="text-muted fw-semibold">
                            How Many Person ?
                          </p>
                        </Col>
                        <Col md={6}>
                          <Form.Control type="number" placeholder="0" />
                        </Col>
                        <Col md={6}>
                          <Form.Control type="number" placeholder="0" />
                        </Col>
                      </Row>
                      <Col md={12} className=" mt-3 mx-auto">
                        <p className="text-muted fw-semibold">
                          Which Class Do You Want ?
                        </p>
                      </Col>
                      <Col md={12} className="mt-4 mx-auto">
                        <Form className="d-flex">
                          <Form.Check
                            inline
                            label=""
                            value="1"
                            name="group1"
                            type="radio"
                          />
                          <span className="me-5">Economy</span>
                          <Form.Check
                            inline
                            label=""
                            name="group1"
                            type="radio"
                          />
                          <span className="me-5">Business</span>
                          <Form.Check
                            inline
                            label=""
                            name="group1"
                            type="radio"
                          />
                          <span className="">First Class</span>
                        </Form>
                      </Col>
                    </Col>
                  </Row>
                  <Col md={12} className="mt-4 ">
                    <a
                      href=""
                      className="btn btn-primary w-75 d-flex justify-content-center mx-auto mb-3 shadow"
                      style={{ height: "2.5rem" }}
                    >
                      <h6 className="me-5 mt-1">SEARCH FLIGHT</h6>
                      <img src={right} alt="" className="h-50 mt-2 ms-4" />
                    </a>
                  </Col>
                </Col>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Header;
