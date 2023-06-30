import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavBrand from '../../elements/logo/NavBrand'
import iconSearch from '../../../assets/logo/iconSearch.png'
// import PrimaryButton from '../../elements/button/ButtonSubmit'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'
import { GoMail } from 'react-icons/go'
import { IoIosNotificationsOutline } from 'react-icons/io'
import user from '../../../assets/images/profile.png'

function NavigationBar() {
    return (
        <Navbar expand="lg">
            <Container>
                <NavBrand />
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse
                    id="navbarScroll"
                    className="justify-content-around"
                >
                    <Nav navbarScroll>
                        <Form>
                            <div
                                className="d-flex position-relative search"
                                style={{ marginLeft: '70px' }}
                            >
                                <img
                                    src={iconSearch}
                                    alt="Search"
                                    width={15}
                                    height={15}
                                    className="position-absolute"
                                    style={{ top: '12px', left: '6px' }}
                                />
                                <Form.Control
                                    type="search"
                                    placeholder="Whre you want to go?"
                                    className="me-2 "
                                    aria-label="Search"
                                    style={{
                                        textAlign: 'center',
                                        width: '230px',
                                        backgroundColor: '#F5F5F5',
                                    }}
                                />
                            </div>
                        </Form>
                        <div className={`d-flex ${style.find}`}>
                            <Link
                                to="/tickets"
                                className="text-decoration-none fw-bold"
                                style={{
                                    fontFamily: 'Poopin',
                                    color: '#414141',
                                }}
                            >
                                <Nav.Link as="div">Find Ticket</Nav.Link>
                            </Link>
                            <Link
                                to="/my-booking"
                                className="text-decoration-none fw-bold"
                                style={{
                                    fontFamily: 'Poopin',
                                    color: '#414141',
                                }}
                            >
                                <Nav.Link as="div">My Booking</Nav.Link>
                            </Link>
                        </div>
                    </Nav>
                    <div className="d-flex justify-content-center gap-3">
                        <GoMail size={30} />
                        <IoIosNotificationsOutline size={30} />
                        <img
                            src={user}
                            alt="profile"
                            width={30}
                            style={{ borderRadius: '50%', objectFit: 'cover' }}
                        />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
