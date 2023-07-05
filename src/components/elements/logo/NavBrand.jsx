import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/logo/logo.png'

const NavBrand = () => {
    const navigate = useNavigate()
    return (
        <div className="hidden sm:block hover:cursor-pointer" onClick={() => navigate("/home")}>
            <div className="d-flex">
                <img
                    height={10}
                    src={logo}
                    alt=""
                    className="object-fit-cover"
                />
                <span className="p-2 fw-bold">Ankasa</span>
            </div>
        </div>
    )
}

export default NavBrand
