import NavBrand from "../elements/logo/NavBrand";
import { RiCopyrightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import appstore from "../../assets/logo/appstore.png";
import playstore from "../../assets/logo/playstore.png";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className="ml-5 text-black footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <NavBrand />
              <p
                className="my-5"
                style={{ fontFamily: "Poppins", color: "#6B6B6B" }}
              >
                Find your Flight and explore the <br />
                world with us. We will take care of the rest{" "}
              </p>
              <div className="d-flex" style={{ color: "#6B6B6B" }}>
                <RiCopyrightLine className="my-1" style={{ height: "17px" }} />
                <p>Ankasa. All Rights Reserved</p>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6"
              style={{ fontFamily: "Poppins" }}
            >
              <h5 className="fw-bold">Features</h5>
              <div className="my-5 d-flex flex-column">
                <Link
                  to="/"
                  className="mb-2 text-decoration-none"
                  style={{ color: "#6B6B6B" }}
                >
                  Find Ticket
                </Link>

                <Link
                  to="/"
                  className="mb-2 text-decoration-none"
                  style={{ color: "#6B6B6B" }}
                >
                  My Booking
                </Link>

                <Link
                  to="/"
                  className="mb-2 text-decoration-none"
                  style={{ color: "#6B6B6B" }}
                >
                  Chat
                </Link>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              style={{ fontFamily: "Poppins" }}
            >
              <h5 className="fw-bold">Download Ankasa App</h5>
              <div className="my-5 d-flex flex-column">
                <img src={appstore} alt="" className="mb-3 w-50" />
                <img src={playstore} alt="" className="w-50" />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
              style={{ fontFamily: "Poppins" }}
            >
              <h5 className="fw-bold">Follow Us</h5>
              <div
                className="gap-3 my-5 d-flex"
                style={{ fontSize: "24px", color: "#6B6B6B" }}
              >
                <FiFacebook />
                <FiTwitter />
                <FiInstagram />
                <FiYoutube />
              </div>
              <div className="d-flex" style={{ color: "#6B6B6B" }}>
                <FiMapPin style={{ fontSize: "24px" }} />
                <p className="ps-3">Jakarta Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
