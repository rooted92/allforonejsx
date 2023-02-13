import { Row, Col, Container, Button, Nav, NavbarBrand } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReverseInput } from '../Services/DataService';
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function ReverseIt() {
    const [userInput, setInput] = useState('');
    const [output, setOutput] = useState('')
    const [isLoading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        const output = await ReverseInput(userInput);
        setOutput(output);
        setLoading(false);
    }

    return (
        <>
            <Nav className="navbar">
                <Container>
                    <Row className='justify-space-between w-100'>
                        <Col xs={6} className='d-flex flex-column justify-content-start'>
                            <NavbarBrand className="sloganText">Reverse It</NavbarBrand>
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
            <Container className='d-flex justify-content-center'>
                <div className='btnsDiv mt-5'>
                    <Container className='my-2'>
                        <Row>
                            <Col>
                            <h1 className='selectText text-center'>Enter a Word or Number</h1>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col xs={1} className='mx-4'></Col>
                            <Col xs={5} className='d-flex flex-column align-content-end p-0'>
                                <input className='textInput' placeholder='Enter word or number' onChange={(event) => {
                                    setInput(event.target.value);
                                }}></input>
                            </Col>
                            <Col xs={3} className="d-flex flex-row justify-content-center p-0">
                                <Button className='submitBtn' onClick={handleClick}>Submit</Button>
                            </Col>
                        </Row>
                    </Container>
                    <Container className='mt-3 text-center'>
                        <Row>
                            <Col>
                            {
                                isLoading ? (<p>Loading...</p>) : (<p>{output}</p>)
                            }
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                            <Nav.Link as={Link} to='/' className='backBtn text-center'>BACK</Nav.Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </>
    );
}

