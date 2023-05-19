import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import borderticket from "../assets/images/borderticket.png";
import barcode from "../assets/images/barcode.png";
import garuda from "../assets/logo/garuda.svg";
import pesawat from "../assets/logo/pesawat.svg";

const DetailBooking = () => {
  return (
    <>
      <NavigationBar />
      <Container
        fluid
        style={{ backgroundColor: "#2395FF", height: "100vh" }}
        className="my-5"
      >
        <Row
          className="justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <Col md={6} className="text-center">
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "20px",
                gap: "20px",
                height: "550px",
                boxShadow: "0px 8px 27px rgba(14, 63, 108, 0.19)",
                borderRadius: "20px",
              }}
            >
              <h3 className="text-start fw-bolder m-4">Booking Pass</h3>
              <div className="position-relative">
                <img
                  src={borderticket}
                  alt="Ticket Border"
                  style={{ width: "100%", height: "auto" }}
                />
                <div
                  className="position-absolute"
                  style={{
                    top: "50%",
                    left: "10%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <div className="d-flex align-items-center gap-1 mb-5">
                    {/* Image */}
                    <img
                      src={garuda}
                      alt="Image"
                      style={{
                        width: "100px",
                        height: "57px",
                      }}
                    />
                    {/* Text */}
                    <p className="m-0 fw-bold">INA</p>
                    <img src={pesawat} alt="" className="mx-4" />
                    <p className="m-0 fw-bold">JPN</p>
                  </div>
                  <div style={{ fontFamily: "Lato" }}>
                    <div
                      className="d-flex align-items-center"
                      style={{ color: "#A5A5A5" }}
                    >
                      <p className="m-0">Code</p>
                      <div className="flex-grow-1"></div>
                      <p className="m-0">Class</p>
                    </div>
                    <div
                      className="d-flex align-items-center mb-3"
                      style={{ color: "#595959" }}
                    >
                      <p className="m-0">AB-221</p>
                      <div className="flex-grow-1"></div>
                      <p className="m-0 text-center">Economy</p>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ color: "#A5A5A5" }}
                    >
                      <p className="m-0">Terminal</p>
                      <div className="flex-grow-1"></div>
                      <p className="m-0">Gate</p>
                    </div>
                    <div
                      className="d-flex align-items-center mb-3"
                      style={{ color: "#595959" }}
                    >
                      <p className="m-0">A</p>
                      <div className="flex-grow-1"></div>
                      <p className="m-0 text-center">221</p>
                    </div>
                    <div className="text-start mt-4">
                      <p className="m-0" style={{ color: "#A5A5A5" }}>
                        Depature
                      </p>
                      <p className="m-0" style={{ color: "#595959" }}>
                        Monday,20 July 2020 - 12.33
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src={barcode}
                  alt="Barcode"
                  className="position-absolute"
                  style={{
                    top: "50%",
                    transform: "translate(-20%, -50%)",
                    maxHeight: "50%",
                    right: "0",
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default DetailBooking;
