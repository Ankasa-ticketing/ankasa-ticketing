import logo from "../../../assets/logo/logo.png";

const NavBrand = () => {
  return (
    <>
      <div className="d-flex">
        <img height={10} src={logo} alt="" className="object-fit-cover" />
        <span className="fw-bold p-2">Ankasa</span>
      </div>
    </>
  );
};

export default NavBrand;
