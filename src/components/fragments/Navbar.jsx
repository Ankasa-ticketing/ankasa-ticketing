import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavBrand from "../elements/logo/NavBrand";
import iconSearch from "../../assets/logo/iconSearch.png";
import PrimaryButton from "../elements/button/ButtonSubmit";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <NavBrand />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form>
              <div
                className="d-flex position-relative"
                style={{ marginLeft: "60px" }}
              >
                <img
                  src={iconSearch}
                  alt="Search"
                  width={15}
                  height={15}
                  className="position-absolute"
                  style={{ top: "12px", left: "6px" }}
                />
                <Form.Control
                  type="search"
                  placeholder="Whre you want to go?"
                  className="me-2"
                  aria-label="Search"
                  style={{
                    textAlign: "center",
                    width: "230px",
                    backgroundColor: "#F5F5F5",
                  }}
                />
              </div>
            </Form>
            <Link
              to="/tickets"
              className="text-decoration-none fw-bold"
              style={{ fontFamily: "Poopin", color: "#414141" }}
            >
              <Nav.Link as="div" style={{ marginLeft: "10rem" }}>
                Find Ticket
              </Nav.Link>
            </Link>
            <Link
              to="/my-booking"
              className="text-decoration-none fw-bold"
              style={{ fontFamily: "Poopin", color: "#414141" }}
            >
              <Nav.Link as="div">My Booking</Nav.Link>
            </Link>
          </Nav>
          <div className="d-flex">
            <PrimaryButton>
              <Link
                to="/"
                className="text-decoration-none "
                style={{ color: "white", fontFamily: "Poppin" }}
              >
                Sign Up
              </Link>
            </PrimaryButton>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
