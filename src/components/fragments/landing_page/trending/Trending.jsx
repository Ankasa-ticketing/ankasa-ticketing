import React from 'react'
import './style.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import japan from '../../../../assets/images/japan.jpg'
import more from '../../../../assets/images/more.png'

const Trending = () => {
    return (
        <Container className="mx-auto mt-5 mb-5 contain">
            <Row className="mx-5 mt-5 mb-5">
                <Col lg={12}>
                    <Row className="mb-5 mt-5 mx-auto title">
                        <Col md={6}>
                            <p
                                className="fw-semibold text-primary"
                                style={{ letterSpacing: '5px' }}
                            >
                                TRENDING
                            </p>
                            <h3>Trending Destinations</h3>
                        </Col>
                        <Col
                            md={6}
                            className="d-flex justify-content-end title"
                        >
                            <p className="fs-5 fw-semibold text-primary">
                                View All
                            </p>
                        </Col>
                    </Row>
                </Col>

                <Col
                    lg={4}
                    className="d-flex justify-content-center trend2 mb-5 "
                >
                    <Card
                        className="mx-2 card-trend shadow  "
                        style={{ width: '15rem', borderRadius: '10px' }}
                    >
                        <div className="mt-3  ">
                            <img
                                src={japan}
                                className="mx-auto"
                                alt="..."
                                style={{
                                    borderRadius: '10px',
                                    height: '200px',
                                    width: '200px',
                                    objectFit: 'fill',
                                }}
                            />
                        </div>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 ">
                                Tokyo,
                            </Card.Subtitle>
                            <Card.Title>
                                <Row>
                                    <Col md={6}>
                                        <h3>Japan</h3>
                                    </Col>
                                    <Col
                                        md={6}
                                        className="d-flex justify-content-end"
                                    >
                                        <img
                                            src={more}
                                            alt=""
                                            className="h-75 mt-1"
                                        />
                                    </Col>
                                </Row>
                                <div className="label-top shadow-sm">
                                    22 Airlines
                                </div>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card
                        className="mx-2 card-trend shadow d-none d-sm-block "
                        style={{ width: '15rem', borderRadius: '10px' }}
                    >
                        <div className="mt-3  ">
                            <img
                                src={japan}
                                className="mx-auto"
                                alt="..."
                                style={{
                                    borderRadius: '10px',
                                    height: '200px',
                                    width: '200px',
                                    objectFit: 'fill',
                                }}
                            />
                        </div>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 ">
                                Tokyo,
                            </Card.Subtitle>
                            <Card.Title>
                                <Row>
                                    <Col md={6}>
                                        <h3>Japan</h3>
                                    </Col>
                                    <Col
                                        md={6}
                                        className="d-flex justify-content-end"
                                    >
                                        <img
                                            src={more}
                                            alt=""
                                            className="h-75 mt-1"
                                        />
                                    </Col>
                                </Row>
                                <div className="label-top shadow-sm">
                                    22 Airlines
                                </div>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col
                    lg={4}
                    className="d-flex justify-content-center trend2 mb-5"
                >
                    <Card
                        className="mx-2 card-trend shadow  "
                        style={{ width: '15rem', borderRadius: '10px' }}
                    >
                        <div className="mt-3  ">
                            <img
                                src={japan}
                                className="mx-auto"
                                alt="..."
                                style={{
                                    borderRadius: '10px',
                                    height: '200px',
                                    width: '200px',
                                    objectFit: 'fill',
                                }}
                            />
                        </div>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 ">
                                Tokyo,
                            </Card.Subtitle>
                            <Card.Title>
                                <Row>
                                    <Col md={6}>
                                        <h3>Japan</h3>
                                    </Col>
                                    <Col
                                        md={6}
                                        className="d-flex justify-content-end"
                                    >
                                        <img
                                            src={more}
                                            alt=""
                                            className="h-75 mt-1"
                                        />
                                    </Col>
                                </Row>
                                <div className="label-top shadow-sm">
                                    22 Airlines
                                </div>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card
                        className="mx-2 card-trend shadow d-none d-sm-block "
                        style={{ width: '15rem', borderRadius: '10px' }}
                    >
                        <div className="mt-3  ">
                            <img
                                src={japan}
                                className="mx-auto"
                                alt="..."
                                style={{
                                    borderRadius: '10px',
                                    height: '200px',
                                    width: '200px',
                                    objectFit: 'fill',
                                }}
                            />
                        </div>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 ">
                                Tokyo,
                            </Card.Subtitle>
                            <Card.Title>
                                <Row>
                                    <Col md={6}>
                                        <h3>Japan</h3>
                                    </Col>
                                    <Col
                                        md={6}
                                        className="d-flex justify-content-end"
                                    >
                                        <img
                                            src={more}
                                            alt=""
                                            className="h-75 mt-1"
                                        />
                                    </Col>
                                </Row>
                                <div className="label-top shadow-sm">
                                    22 Airlines
                                </div>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col
                    lg={4}
                    className="d-flex justify-content-center trend2 mb-5"
                >
                    <Card
                        className="mx-2 card-trend shadow  "
                        style={{ width: '15rem', borderRadius: '10px' }}
                    >
                        <div className="mt-3  ">
                            <img
                                src={japan}
                                className="mx-auto"
                                alt="..."
                                style={{
                                    borderRadius: '10px',
                                    height: '200px',
                                    width: '200px',
                                    objectFit: 'fill',
                                }}
                            />
                        </div>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 ">
                                Tokyo,
                            </Card.Subtitle>
                            <Card.Title>
                                <Row>
                                    <Col md={6}>
                                        <h3>Japan</h3>
                                    </Col>
                                    <Col
                                        md={6}
                                        className="d-flex justify-content-end"
                                    >
                                        <img
                                            src={more}
                                            alt=""
                                            className="h-75 mt-1"
                                        />
                                    </Col>
                                </Row>
                                <div className="label-top shadow-sm">
                                    22 Airlines
                                </div>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card
                        className="mx-2 card-trend shadow d-none d-sm-block "
                        style={{ width: '15rem', borderRadius: '10px' }}
                    >
                        <div className="mt-3  ">
                            <img
                                src={japan}
                                className="mx-auto"
                                alt="..."
                                style={{
                                    borderRadius: '10px',
                                    height: '200px',
                                    width: '200px',
                                    objectFit: 'fill',
                                }}
                            />
                        </div>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 ">
                                Tokyo,
                            </Card.Subtitle>
                            <Card.Title>
                                <Row>
                                    <Col md={6}>
                                        <h3>Japan</h3>
                                    </Col>
                                    <Col
                                        md={6}
                                        className="d-flex justify-content-end"
                                    >
                                        <img
                                            src={more}
                                            alt=""
                                            className="h-75 mt-1"
                                        />
                                    </Col>
                                </Row>
                                <div className="label-top shadow-sm">
                                    22 Airlines
                                </div>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Trending
