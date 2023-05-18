import logo from "../../../assets/logo/logo.png";

const Logo = () => {
  return (
    <>
      <div className="my-5 d-flex">
        <img height={25} src={logo} alt="" />
        <span className="fw-bold p-2">Ankasa</span>
      </div>
    </>
  );
};

export default Logo;
