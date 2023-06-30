import { Container, Row, Col } from 'react-bootstrap'
import NavigationBar from '../components/fragments/navbar/Navbar'
import Footer from '../components/fragments/Footer'
// import borderticket from "../assets/images/borderticket.png";
import barcode from '../assets/images/barcode.png'
import garuda from '../assets/logo/garuda.svg'
import pesawat from '../assets/logo/pesawat.svg'
import styles from './DetailBooking.module.css'

const DetailBooking = () => {
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
                            <h3 className="text-start fw-bolder m-4">
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
                                    <Row className=" mb-5 w-100">
                                        {/* Image */}
                                        <Col
                                            md={6}
                                            className="d-flex align-items-center"
                                        >
                                            <img
                                                src={garuda}
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
                                            <p className="m-0 fw-bold">INA</p>
                                        </Col>
                                        <Col
                                            md={2}
                                            className="d-flex align-items-center"
                                        >
                                            <img
                                                src={pesawat}
                                                alt=""
                                                className="mx-2"
                                            />
                                        </Col>
                                        <Col
                                            md={2}
                                            className="d-flex align-items-center"
                                        >
                                            <p className="m-0 fw-bold">JPN</p>
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
                                            <p className="m-0">AB-221</p> <br />
                                            <p className="m-0">Terminal</p>
                                            <p className="m-0">A</p>
                                        </Col>
                                        <Col
                                            md={6}
                                            style={{
                                                fontFamily: 'Lato',
                                                color: '#A5A5A5',
                                            }}
                                        >
                                            <p className="m-0">Class</p>
                                            <p className="m-0 ">Economy</p>{' '}
                                            <br />
                                            <p className="m-0">Gate</p>
                                            <p className="m-0">221</p>
                                        </Col>
                                    </Row>
                                    <div className="text-start mt-4">
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
                                            Monday,20 July 2020 - 12.33
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
