// import { Row, Col } from "react-bootstrap";
import imageLogin from "../../../assets/images/contenlogin.svg";

const Hero = () => {
  return (
    <>
      <div
        className="d-flex vh-100 justify-content-center align-items-center"
        style={{ backgroundColor: "#2395FF" }}
      >
        <div className="d-flex ">
          <img src={imageLogin} alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </>
  );
};

export default Hero;
