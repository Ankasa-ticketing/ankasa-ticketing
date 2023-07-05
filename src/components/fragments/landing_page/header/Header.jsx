import React, { useState } from 'react'
import './Style.css'
import { Container, Row, Col, Card, Form } from 'react-bootstrap'
import header2 from '../../../../assets/images/Group 55.png'
import header1 from '../../../../assets/images/Group 53.png'
import header3 from '../../../../assets/images/Vector 6.png'
import btn from '../../../../assets/images/btnback.png'
import Vector from '../../../../assets/images/Vector.png'
import plane from '../../../../assets/images/plane.png'
import round from '../../../../assets/images/round.png'
import right from '../../../../assets/images/right.png'
import { Link, useNavigate } from 'react-router-dom'
import { BiSolidChevronRight } from "react-icons/bi";
import { IoPaperPlane } from 'react-icons/io5'

const Header = () => {
    const [date, setDate] = useState(new Date())

    return (
        // <Container className="mt-5 mb-5 container-fluid">
        //     <Row className="mt-5 row" style={{}}>
        //         <Col lg={6} className="mt-5 text-start header-col col">
        //             <br />
        //             <div className="mx-auto d-flex flex-column w-75 ">
        //                 <h1
        //                     className="mt-5 "
        //                     style={{ fontSize: '3.380rem', fontWeight: '600' }}
        //                 >
        //                     Find Your{' '}
        //                     <span style={{ color: '#2395FF' }}>Flight</span>
        //                 </h1>
        //                 <p
        //                     className="mt-2 mb-5 header-tittle"
        //                     style={{
        //                         color: '#979797',
        //                         fontSize: '1.130rem',
        //                         fontWeight: '400',
        //                     }}
        //                 >
        //                     and explore the world with us
        //                 </p>
        //             </div>
        //             <img
        //                 src={header1}
        //                 alt=""
        //                 className="mt-5 img-fluid img "
        //                 // style={{ width: "1000px" }}
        //             />
        //         </Col>
        //         <Col lg={6} className="header-col d-none d-sm-block ">
        //             <Col lg={12} className="d-flex justify-content-end ">
        //                 <img
        //                     src={header2}
        //                     alt=""
        //                     className="mb-5 img-fluid img2"
        //                 />
        //             </Col>
        //             <Col lg={12} className="mt-5">
        //                 <img
        //                     src={header3}
        //                     alt=""
        //                     className="mx-auto mt-5 w-25 img3"
        //                 />
        //             </Col>
        //         </Col>
        //         <Col
        //             md={3}
        //             className="position-absolute top-50 start-50 translate-middle-y "
        //         >
        //             <div className="me-5">
        //                 <Card
        //                     className="shadow-lg me-5 card-1"
        //                     style={{
        //                         width: '450px',
        //                         right: '65px',
        //                         top: '170px',
        //                         borderRadius: '20px',
        //                     }}
        //                     // style={{ height: "700px", width: "500px", }}
        //                 >
        //                     <Card.Body className="me-5">
        //                         <Col md={12} className="ms-3">
        //                             <p className="fw-semibold fs-5">Hey,</p>
        //                             <h4 className="fw-semibold">
        //                                 Where you want to go?
        //                             </h4>
        //                             <Row>
        //                                 <Col md={8} className="text-start w-50">
        //                                     <p
        //                                         className="py-2 fw-bold blue"
        //                                         style={{ color: '#2395FF' }}
        //                                     >
        //                                         Recently searched
        //                                     </p>
        //                                 </Col>
        //                                 <Col md={4} className="w-25">
        //                                     <img
        //                                         src={btn}
        //                                         alt=""
        //                                         className="mt-3"
        //                                     />
        //                                 </Col>
        //                             </Row>
        //                             <Row>
        //                                 <Col md={12}>
        //                                     <Card className="mx-auto shadow ">
        //                                         <Card.Body>
        //                                             <Row>
        //                                                 <Col
        //                                                     md={6}
        //                                                     className="text-start"
        //                                                 >
        //                                                     <p className="text-muted">
        //                                                         From
        //                                                     </p>
        //                                                 </Col>
        //                                                 <Col
        //                                                     md={6}
        //                                                     className="text-end"
        //                                                 >
        //                                                     <p className="text-muted">
        //                                                         To
        //                                                     </p>
        //                                                 </Col>
        //                                                 <Col md={5}>
        //                                                     <h4>Medan</h4>
        //                                                 </Col>
        //                                                 <Col md={2}>
        //                                                     {' '}
        //                                                     <img
        //                                                         src={Vector}
        //                                                         alt=""
        //                                                         className="mt-2"
        //                                                     />
        //                                                 </Col>
        //                                                 <Col
        //                                                     md={5}
        //                                                     className="text-end"
        //                                                 >
        //                                                     <h4>Tokyo</h4>
        //                                                 </Col>
        //                                                 <Col
        //                                                     md={6}
        //                                                     className="text-start"
        //                                                 >
        //                                                     <p className="">
        //                                                         Indonesia
        //                                                     </p>
        //                                                 </Col>
        //                                                 <Col
        //                                                     md={6}
        //                                                     className="text-end"
        //                                                 >
        //                                                     <p className="">
        //                                                         Japan
        //                                                     </p>
        //                                                 </Col>
        //                                             </Row>
        //                                         </Card.Body>
        //                                     </Card>
        //                                     <Row className="mt-4">
        //                                         <Col md={6} className="">
        //                                             <a className="btn btn-primary d-flex">
        //                                                 <img
        //                                                     src={plane}
        //                                                     alt=""
        //                                                     className="mt-1 me-3 ms-4 h-25"
        //                                                     // style={{ width: "20%" }}
        //                                                 />
        //                                                 <span className="fw-semibold">
        //                                                     {' '}
        //                                                     One Way
        //                                                 </span>
        //                                             </a>
        //                                         </Col>
        //                                         <Col md={6} className="">
        //                                             <a className="btn btn-light d-flex">
        //                                                 <img
        //                                                     src={round}
        //                                                     alt=""
        //                                                     className="mt-1 ms-4 me-2 h-25"
        //                                                 />
        //                                                 <span className="ms-2 fw-semibold">
        //                                                     Round Trip
        //                                                 </span>
        //                                             </a>
        //                                         </Col>
        //                                         <Col
        //                                             md={12}
        //                                             className="mx-auto mt-3 "
        //                                         >
        //                                             <p className="text-muted fw-semibold">
        //                                                 Departure
        //                                             </p>
        //                                             <Form.Control
        //                                                 type="date"
        //                                                 name="datepic"
        //                                                 placeholder="DateRange"
        //                                                 className="h-50"
        //                                                 value={date}
        //                                                 onChange={(e) =>
        //                                                     setDate(
        //                                                         e.target.value
        //                                                     )
        //                                                 }
        //                                             />
        //                                         </Col>
        //                                     </Row>
        //                                     <Row>
        //                                         <Col
        //                                             md={12}
        //                                             className="mx-auto mt-3 "
        //                                         >
        //                                             <p className="text-muted fw-semibold">
        //                                                 How Many Person ?
        //                                             </p>
        //                                         </Col>
        //                                         <Col md={6}>
        //                                             <Form.Control
        //                                                 type="number"
        //                                                 placeholder="0"
        //                                             />
        //                                         </Col>
        //                                         <Col md={6}>
        //                                             <Form.Control
        //                                                 type="number"
        //                                                 placeholder="0"
        //                                             />
        //                                         </Col>
        //                                     </Row>
        //                                     <Col
        //                                         md={12}
        //                                         className="mx-auto mt-3 "
        //                                     >
        //                                         <p className="text-muted fw-semibold">
        //                                             Which Class Do You Want ?
        //                                         </p>
        //                                     </Col>
        //                                     <Col
        //                                         md={12}
        //                                         className="mx-auto mt-4"
        //                                     >
        //                                         <Form className="d-flex">
        //                                             <Form.Check
        //                                                 inline
        //                                                 label=""
        //                                                 value="1"
        //                                                 name="group1"
        //                                                 type="radio"
        //                                             />
        //                                             <span className="me-5">
        //                                                 Economy
        //                                             </span>
        //                                             <Form.Check
        //                                                 inline
        //                                                 label=""
        //                                                 name="group1"
        //                                                 type="radio"
        //                                             />
        //                                             <span className="me-5">
        //                                                 Business
        //                                             </span>
        //                                             <Form.Check
        //                                                 inline
        //                                                 label=""
        //                                                 name="group1"
        //                                                 type="radio"
        //                                             />
        //                                             <span className="">
        //                                                 First Class
        //                                             </span>
        //                                         </Form>
        //                                     </Col>
        //                                 </Col>
        //                             </Row>
        //                             <Col md={12} className="mt-4 ">
        //                                 <a
        //                                     href=""
        //                                     className="mx-auto mb-3 shadow btn btn-primary w-75 d-flex justify-content-center"
        //                                     style={{ height: '2.5rem' }}
        //                                 >
        //                                     {/* <Link to={'/tickets'}><h6 className="mt-1 me-5">SEARCH FLIGHT</h6></Link> */}
        //                                     <h6 className="mt-1 me-5 search-flight ">
        //                                         <Link
        //                                             className="text-white"
        //                                             to={'/tickets'}
        //                                             style={{
        //                                                 textDecoration: 'none',
        //                                             }}
        //                                         >
        //                                             SEARCH FLIGHT
        //                                         </Link>
        //                                     </h6>
        //                                     <img
        //                                         src={right}
        //                                         alt=""
        //                                         className="mt-2 h-50 ms-4"
        //                                     />
        //                                 </a>
        //                             </Col>
        //                         </Col>
        //                     </Card.Body>
        //                 </Card>
        //             </div>
        //         </Col>
        //     </Row>
        // </Container>
        <>
            <div className="hidden sm:flex">
                {/* kiri */}
                <div className="flex flex-col justify-between w-2/3 h-screen ">
                    <div className="px-24 pt-24">
                        <p className="text-5xl font-semibold">Find Your <span className='text-[#2395FF]'>Flight</span></p>
                        <p className="text-gray-400">and explore the world with us</p>
                    </div>
                    <div className="w-[53vw]">
                        <img src={header1} alt="gambar" />
                    </div>
                </div>

                {/* kanan */}
                <div className="relative flex justify-end w-1/3">
                    <div className="w-[25vw]">
                        <img src={header2} alt="gambar" />
                    </div>

                    <div className="absolute top-14 -left-56">
                        <HeaderCard />
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-5 sm:hidden'>
                <HeaderCard />
            </div>
        </>
    )
}

const HeaderCard = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col px-4 py-4 space-y-3 bg-white rounded-lg shadow-md w-fit">
            <div className="flex flex-col">
                <div className="font-semibold">Hey,</div>
                <div className="font-semibold">Where you want to go?</div>
            </div>

            <div className="flex items-center text-[#2395FF] w-full justify-between">
                <div className="font-semibold">Recenly Searched</div>
                <BiSolidChevronRight className='text-2xl' />
            </div>

            <div className="flex px-4 py-2 space-x-16 rounded-lg shadow-md w-fit">
                <div>
                    <div className='text-sm text-gray-400'>From</div>
                    <div className='text-xl font-semibold'>Medan</div>
                    <div className='text-sm text-gray-400'>Indonesia</div>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={Vector} alt="vektor" />
                </div>
                <div>
                    <div className='text-sm text-gray-400'>To</div>
                    <div className='text-xl font-semibold'>Tokyo</div>
                    <div className='text-sm text-gray-400'>Japan</div>
                </div>
            </div>

            <div className="flex justify-evenly">
                <div className=' w-fit px-3 py-1 font-semibold rounded-md text-white bg-[#2395FF]'>
                    One way
                </div>
                <div className='px-3 py-1 font-semibold text-gray-500 bg-gray-200 rounded-md w-fit'>
                    Round trip
                </div>
            </div>

            <div className="flex flex-col space-y-3">
                <div className='text-sm text-gray-500'>Departure</div>
                <div className='flex items-center justify-between px-3 border rounded-md'>
                    <input type="text" name="deperture" value={"Monday, 20 July 2020"} className='text-sm border-none focus:ring-0' />
                    <BiSolidChevronRight className='text-[#2395FF]' />
                </div>
            </div>

            <div className="flex flex-col space-y-3">
                <div className='text-sm text-gray-500'>How many person?</div>

                <div className="flex justify-between">
                    <div className='flex items-center justify-between px-3 border rounded-md w-fit'>
                        <input type="text" name="deperture" value={"2 child"} className='w-24 text-sm border-none focus:ring-0' />
                        <BiSolidChevronRight className='text-[#2395FF]' />
                    </div>

                    <div className='flex items-center justify-between px-3 border rounded-md w-fit'>
                        <input type="text" name="deperture" value={"4 adult"} className='w-24 text-sm border-none focus:ring-0' />
                        <BiSolidChevronRight className='text-[#2395FF]' />
                    </div>
                </div>
            </div>

            <div className="flex flex-col space-y-3">
                <div className='text-sm text-gray-500'>Which class do you want?</div>
                <div className="flex gap-4">
                    <div class="flex items-center mb-4">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <span for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Economy</span>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <span for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Business</span>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <span for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">First class</span>
                    </div>
                </div>
            </div>

            {/* Button  */}
            <div
                onClick={() => navigate("/tickets")}
                className="text-white bg-[#2395FF] flex items-center justify-between px-4 py-2 rounded-lg hover:cursor-pointer">
                <div className='text-lg font-semibold'>SEARCH FLIGHT</div>
                <IoPaperPlane />
            </div>
        </div>
    )
}
export default Header
