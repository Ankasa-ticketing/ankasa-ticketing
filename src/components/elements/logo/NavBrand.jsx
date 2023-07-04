import logo from '../../../assets/logo/logo.png'

const NavBrand = () => {
    return (
        <div className="hidden sm:block">
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
