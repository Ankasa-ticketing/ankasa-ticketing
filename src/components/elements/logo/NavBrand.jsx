import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";

const NavBrand = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex items-center justify-center space-x-2 hover:cursor-pointer" onClick={() => navigate("/home")}>
        <img height={10} src={logo} alt="" className="" />
        <div className="text-xl font-semibold text-blue-500 no-underline">Ankasa</div>
      </div>
    </>
  );
};

export default NavBrand;
