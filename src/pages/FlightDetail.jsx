import { Container, Row, Col } from "react-bootstrap";

const FlightDetail = () => {
  return (
    <>
      <Row
        className="position-relative text-center w-100"
        style={{
          backgroundColor: "#2395FF",
          height: "174px",
          borderRadius: "0px 0px 30px 30px",
          color: "white",
        }}
      >
        <Col xs={12} sm={5} md={5} className="my-5">
          <h4>Contact Person Detail</h4>
        </Col>
        <Col xs={12} sm={4} md={4} className="my-5">
          <h4>Flight Details</h4>
        </Col>
        <Col xs={12} sm={3} md={3} className="my-5">
          <h5>View Details</h5>
        </Col>
      </Row>
      <div className="position-absolute w-100" style={{ top: "120px" }}>
        <Container>
          <Row className="w-100">
            <Col xs={12} sm={8} md={8}>
              <div className="card shadow" style={{ height: "300px" }}>
                <div className="card-body">
                  <p>name</p>
                  <input type="text" name="" id="" />
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4} md={4}>
              <div className="card shadow" style={{ height: "300px" }}>
                <div className="card-body">{/* Konten Card */}</div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="w-50 my-5">
            <Col xs={12} sm={12} md={12}>
              <div className="card shadow" style={{ height: "300px" }}>
                <div className="card-body">{/* Konten Card */}</div>
              </div>
            </Col>
          </Row>
          <Row className="w-50">
            <Col xs={12} sm={12} md={12}>
              <div className="card shadow" style={{ height: "150px" }}>
                <div className="card-body">{/* Konten Card */}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FlightDetail;
