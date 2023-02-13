import { useState } from "react"
import { OddOrEven } from "../Services/DataService";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Nav, NavbarBrand } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function OddEven() {
    const [number, setNumber] = useState('');
    const [result, getResult] = useState('');
    const [isLoading, setLoading] = useState(false);
    const handleClick = async () => {
        setLoading(true)
        const result = await OddOrEven(number);
        getResult(result);
        setLoading(false);
    }
    return (
        <>
            <Nav className="navbar">
                <Container>
                    <Row className='justify-space-between w-100'>
                        <Col xs={6} className='d-flex flex-column justify-content-start'>
                            <NavbarBrand className="sloganText">Odd Or Even</NavbarBrand>
                        </Col>
                        <Col xs={6} className='d-flex justify-content-end'>
                            <Nav.Link className='homeLink' as={Link} to='/'>Home</Nav.Link>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col xs={12} className='d-flex justify-content-start'>
                            <p className="my-name">Pedro Castaneda</p>
                        </Col>
                    </Row>
                </Container>
            </Nav>
            <Container className="d-flex justify-content-center">
                <div className="btnsDiv mt-5">
                    <Container className="my-2">
                        <Row>
                            <Col>
                                <h1 className="selectText text-center">Enter a Number</h1>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="mt-3">
                        <Row>
                            <Col xs={2}></Col>
                            <Col xs={5} className='d-flex flex-row justify-content-end'>
                                <input placeholder="Enter number" className="numberInput" onChange={(event) => {
                                    setNumber(event.target.value);
                                }}></input>
                            </Col>
                            <Col xs={4}>
                                <Button className="submitBtn" onClick={handleClick}>Submit</Button>
                            </Col>
                            <Col xs={1}></Col>
                        </Row>
                    </Container>
                    <Container className="mt-3">
                        <Row>
                            <Col className="text-center">
                                {
                                    isLoading ? (<p>Loading...</p>) : (<p>{result}</p>)
                                }
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Nav.Link className="backBtn" as={Link} to='/'><p className="text-center">BACK</p></Nav.Link>
                        </Row>
                    </Container>
                </div>
            </Container>
        </>
    );
}