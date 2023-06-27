import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import "./FlightDetail.css";
import PrimaryButton from "../../components/elements/button/ButtonSubmit";
import NavigationBar from "../../components/fragments/Navbar";
import Footer from "../../components/fragments/Footer";
import garuda from "../../assets/logo/garuda.svg";
import pesawat from "../../assets/logo/pesawat.svg";
import DropdownCity from "../../components/elements/dropdown_city/DropdownCity";
import DropdownTitle from "../../components/elements/dropdown_title/DropdownTitle";
import InputFormProfile from "../../components/elements/input_form_profile/InputFormProfile";
import LabelName from "../../components/elements/labelname/LabelName";

const FlightDetail = () => {
  return (
    <>
      <div className="my-2">
        <NavigationBar />
      </div>
      <Row>
        <div
          className="p-0 text-center position-relative w-100 "
          style={{
            backgroundColor: "#2395FF",
            height: "174px",
            borderRadius: "0px 0px 30px 30px",
            color: "white",
            backgroundImage: "url(src/assets/images/blueplane.svg)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Row>
            <Col xs={12} sm={12} md={5} className="my-5">
              <h4>Contact Person Detail</h4>
            </Col>
            <Col xs={12} sm={12} md={4} className="my-5">
              <h4>Flight Details</h4>
            </Col>
            <Col xs={12} sm={12} md={3} className="my-5">
              <h5>View Details</h5>
            </Col>
          </Row>
        </div>
      </Row>
      <div className="position-absolute w-100" style={{ top: "220px" }}>
        <Container>
          <Row>
            <Col xs={12} sm={8} md={8}>
              <div
                className="shadow card"
                style={{ height: "415px", borderRadius: "15px" }}
              >
                <div className="card-body">
                  <Form style={{ paddingTop: "50px" }}>
                    <Form.Group className="group">
                      <Form.Control className="input" type="text" required />
                      <span className="highlight"></span>
                      <span className="bar"></span>
                      <Form.Label htmlFor="name">Full Name</Form.Label>
                    </Form.Group>
                    <br />
                    <Form.Group className="group">
                      <Form.Control className="input" type="email" required />
                      <span className="highlight"></span>
                      <span className="bar"></span>
                      <Form.Label htmlFor="email">Email</Form.Label>
                    </Form.Group>
                    <br />
                    <Form.Group className="group">
                      <Form.Control className="input" type="number" required />
                      <span className="highlight"></span>
                      <span className="bar"></span>
                      <Form.Label htmlFor="phone">Phone Number</Form.Label>
                    </Form.Group>
                    <br />
                  </Form>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4} md={4}>
              <div
                className="shadow card"
                style={{ height: "375px", borderRadius: "15px" }}
              >
                <div className="card-body">
                  <Row className="align-items-center">
                    <Col md={5}>
                      <img src={garuda} alt="" />
                    </Col>
                    <Col md={7}>
                      <p>Garuda Indonesia</p>
                    </Col>
                  </Row>
                  <Row className="mt-3 align-items-center">
                    <Col md={12} className="gap-5 d-flex">
                      <p className="m-0 fw-bold">Medan(IDN)</p>
                      <img src={pesawat} alt="" />
                      <p className="m-0 fw-bold">Tokyo (JPN)</p>
                    </Col>
                  </Row>
                  <Row className="mt-3 align-items-center">
                    <Col md={8}>
                      <p className="m-0" style={{ color: "#6B6B6B" }}>
                        Sunday,15 Agustus 2022
                      </p>
                    </Col>
                    <Col md={4}>
                      <p className="m-0" style={{ color: "#6B6B6B" }}>
                        {" "}
                        12.33 - 15.21
                      </p>
                    </Col>
                  </Row>
                  <Row
                    style={{ color: "#2395FF", fontFamily: "Poppins" }}
                    className="my-3"
                  >
                    <Col md={8} className="gap-3 d-flex">
                      <Form.Check type="radio" />{" "}
                      <p className="m-0">Refundable</p>
                    </Col>
                    <Col md={8} className="gap-3 d-flex">
                      <Form.Check type="radio" />{" "}
                      <p className="m-0">Can Reschedule</p>
                    </Col>
                  </Row>
                  <Row style={{ fontFamily: "Poppins" }}>
                    <hr />
                    <Col
                      md={12}
                      className="my-4 d-flex justify-content-between"
                    >
                      <p className="fw-bold fs-6">Total Payment</p>
                      <p className="fs-5" style={{ color: "#2395FF" }}>
                        $ 145,00
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <h3 className="my-5">Passenger Detail</h3>
          <Row className="my-5 ">
            <Col md={6}>
              <div
                className="shadow card"
                style={{ height: "415px", borderRadius: "15px" }}
              >
                <div className="card-body">
                  {/* Konten Card */}
                  <Alert variant="primary" className="p-2 m-0">
                    <div
                      className="d-flex justify-content-between"
                      style={{ color: "#595959", fontFamily: "Lato" }}
                    >
                      <p className="m-0">Passenger : 1 Adult</p>
                      <div className="d-flex">
                        <p className="m-0">Same as contact person</p>
                        <div className="form-check form-switch form-check-reverse">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </div>
                    </div>
                  </Alert>

                  <div className="border-b border-[#D2C2FFAD] py-2 w-96 ml-3 mt-5">
                    <p className="text-[#9B96AB] text-sm">Title</p>
                    <DropdownTitle />
                  </div>
                  <div>
                    <InputFormProfile type={"text"} label={"Full Name"} />
                  </div>

                  <div className="border-b border-[#D2C2FFAD] py-2 w-96 ml-3">
                    <p className="text-[#9B96AB] text-sm">City</p>
                    <DropdownCity />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <h3 className="mb-5">Passenger Detail</h3>
            <Col md={6}>
              <div
                className="shadow card"
                style={{ height: "150px", borderRadius: "15px" }}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <Form.Group
                      className="mb-3 d-flex"
                      controlId="formBasicCheckbox"
                    >
                      <input
                        type="checkbox"
                        id="isChecked"
                        name="isChecked"
                        aria-label="Checkbox for agreeing to terms and conditions"
                      />
                      <div
                        style={{ fontFamily: "Lato" }}
                        className="fs-5 fw-bold"
                      >
                        <LabelName>Travel Insurance</LabelName>
                      </div>
                    </Form.Group>
                    <div className="d-flex align-items-center">
                      <h5 style={{ color: "#2395FF" }} className="m-0">
                        $2,00
                      </h5>
                      <p className="m-0">/pack</p>
                    </div>
                  </div>
                  <hr />
                  <div style={{ fontFamily: "Poppins" }}>
                    <p>Get travel compensation up to $ 10.000,00</p>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <PrimaryButton>Proceed to payment</PrimaryButton>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="my-2">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default FlightDetail;
