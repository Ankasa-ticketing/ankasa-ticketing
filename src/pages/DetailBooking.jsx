import { Container, Row, Col } from 'react-bootstrap'
import NavigationBar from '../components/fragments/navbar/Navbar'
import Footer from '../components/fragments/Footer'
// import borderticket from "../assets/images/borderticket.png";
import barcode from '../assets/images/barcode.png'
import garuda from '../assets/logo/garuda.svg'
import pesawat from '../assets/logo/pesawat.svg'
import styles from './DetailBooking.module.css'
import useBooking from '../states/useBooking'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const DetailBooking = () => {
    let { booking_id } = useParams();
    const { fecthOne, booking } = useBooking()

    useEffect(() => {
        fecthOne(localStorage.getItem("token"), booking_id)
    }, [])
    console.log(booking);

    return (
        <>
            <NavigationBar />
            <Container
                fluid
                style={{ backgroundColor: '#2395FF', padding: '30px 0' }}
                className="mb-5"
            >
                <Row className="justify-content-center align-items-center">
                    <Col md={6}>
                        <div
                            style={{
                                backgroundColor: '#FFFFFF',
                                padding: '20px',
                                gap: '20px',
                                boxShadow:
                                    '0px 8px 27px rgba(14, 63, 108, 0.19)',
                                borderRadius: '20px',
                            }}
                        >
                            <h3 className="m-4 text-start fw-bolder">
                                Booking Pass
                            </h3>
                            <Row className={styles.border_ticket}>
                                <Col
                                    md={7}
                                    className="p-5"
                                    style={{
                                        borderRight: '3px dotted #E5E5E5',
                                    }}
                                >
                                    <Row className="mb-5 w-100">
                                        {/* Image */}
                                        <Col
                                            md={6}
                                            className="d-flex align-items-center"
                                        >
                                            <img
                                                src={booking.image}
                                                alt="Image"
                                                style={{
                                                    width: '100px',
                                                    height: '57px',
                                                }}
                                            />
                                        </Col>
                                        <Col
                                            md={2}
                                            className="d-flex align-items-center"
                                        >
                                            {/* Text */}
                                            <p className="m-0 fw-bold">{booking.from_location}</p>
                                        </Col>
                                        <Col
                                            md={2}
                                            className="d-flex align-items-center"
                                        >
                                            <img
                                                src={pesawat}
                                                alt=""
                                                className="mx-3"
                                            />
                                        </Col>
                                        <Col
                                            md={2}
                                            className="d-flex align-items-center"
                                        >
                                            <p className="m-0 fw-bold">{booking.destination}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col
                                            md={6}
                                            style={{
                                                fontFamily: 'Lato',
                                                color: '#A5A5A5',
                                            }}
                                        >
                                            <p className="m-0">Code</p>
                                            <p className="m-0">{booking.code}</p> <br />
                                            <p className="m-0">Terminal</p>
                                            <p className="m-0">{booking.terminal}</p>
                                        </Col>
                                        <Col
                                            md={6}
                                            style={{
                                                fontFamily: 'Lato',
                                                color: '#A5A5A5',
                                            }}
                                        >
                                            <p className="m-0">Class</p>
                                            <p className="m-0 ">{booking.class}</p>{' '}
                                            <br />
                                            <p className="m-0">Gate</p>
                                            <p className="m-0">{booking.gate}</p>
                                        </Col>
                                    </Row>
                                    <div className="mt-4 text-start">
                                        <p
                                            className="m-0"
                                            style={{ color: '#A5A5A5' }}
                                        >
                                            Depature
                                        </p>
                                        <p
                                            className="m-0"
                                            style={{ color: '#595959' }}
                                        >
                                            Monday,20 July 2020 - {booking.departure_time}
                                        </p>
                                    </div>
                                </Col>
                                <Col
                                    md={5}
                                    className="p-5 d-flex align-items-center"
                                >
                                    <img src={barcode} alt="Barcode" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default DetailBooking
