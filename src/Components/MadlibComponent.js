import { Madlib } from "../Services/DataService";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Nav, NavbarBrand } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function MadlibComp() {
    const [adjOne, setAdjOne] = useState('');
    const [adjTwo, setAdjTwo] = useState('');
    const [nounOne, setNounOne] = useState('');
    const [nounTwo, setNounTwo] = useState('');
    const [nounThree, setNounThree] = useState('');
    const [nounFour, setNounFour] = useState('');
    const [nounFive, setNounFive] = useState('');
    const [verbOne, setVerbOne] = useState('');
    const [verbTwo, setVerbTwo] = useState('');
    const [verbThree, setVerbThree] = useState('');
    const [verbFour, setVerbFour] = useState('');
    const [adverb, setAdverb] = useState('');
    const [madlibOutput, setOutput] = useState('');
    const [isLoading, setLoading] = useState(false);

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            setLoading(true);
            const madlibOutput = await Madlib(adjOne, adjTwo, nounOne, nounTwo, nounThree, nounFour, nounFive, verbOne, verbTwo, verbThree, verbFour, adverb);
            setOutput(madlibOutput);
            setLoading(false);
        }
    }

    const handleClick = async () => {
        setLoading(true);
        const madlibOutput = await Madlib(adjOne, adjTwo, nounOne, nounTwo, nounThree, nounFour, nounFive, verbOne, verbTwo, verbThree, verbFour, adverb);
        setOutput(madlibOutput);
        setLoading(false);
    }

    return (
        <>
            <Nav className="navbar">
                <Container>
                    <Row className='justify-space-between w-100'>
                        <Col xs={6} className='d-flex flex-column justify-content-start'>
                            <NavbarBrand className="sloganText">Madlib</NavbarBrand>
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
            <Container className="d-flex justify-content-center mt-5">
                <div className="btnsDiv">
                    <Container className="my-2">
                        <Row>
                            <Col>
                                <h1 className="selectText text-center">Enter 12 Words</h1>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="mt-2">
                        <Row>
                            <Col xs={3}></Col>
                            <Col xs={4} className='d-flex flex-column align-items-end p-0'>
                                <input required className="textInput mb-2" onChange={(e) => {
                                    setAdjOne(e.target.value);
                                }} placeholder='Enter adjective' onKeyDown={handleKeyDown}></input>
                                <input required className="textInput mb-2" onChange={(e) => {
                                    setAdjTwo(e.target.value);
                                }} placeholder='Enter adjective' onKeyDown={handleKeyDown}></input>
                                <input className="textInput mb-2" onChange={(e) => {
                                    setNounOne(e.target.value);
                                }} placeholder='Enter name of creature' onKeyDown={handleKeyDown}></input>
                                <input className="textInput mb-2" onChange={(e) => {
                                    setNounTwo(e.target.value);
                                }} placeholder='Enter name of thing' onKeyDown={handleKeyDown}></input>
                                <input className="textInput mb-2" onChange={(e) => {
                                    setNounThree(e.target.value);
                                }} placeholder='Enter name of thing' onKeyDown={handleKeyDown}></input>
                                <input className="textInput mb-2" onChange={(e) => {
                                    setNounFour(e.target.value);
                                }} placeholder='Enter name of thing' onKeyDown={handleKeyDown}></input>
                                <input className="textInput mb-2" onChange={(e) => {
                                    setNounFive(e.target.value);
                                }} placeholder='Enter name of thing' onKeyDown={handleKeyDown}></input>
                                <input className="textInput mb-2" onChange={(e) => {
                                    setVerbOne(e.target.value);
                                }} placeholder='Enter verb with "ing"' onKeyDown={handleKeyDown}></input>
                                <input className="textInput mb-2" onChange={(e) => {
                                    setVerbTwo(e.target.value);
                                }} placeholder='Enter verb with "ing"' onKeyDown={handleKeyDown}></input>
                                <input className="textInput mb-2" onChange={(e) => {
                                    setVerbThree(e.target.value);
                                }} placeholder='Enter past tense verb' onKeyDown={handleKeyDown}></input>
                                <input className="textInput mb-2" onChange={(e) => {
                                    setVerbFour(e.target.value);
                                }} placeholder='Enter verb with "ing"' onKeyDown={handleKeyDown}></input>
                                <input className="textInput" onChange={(e) => {
                                    setAdverb(e.target.value);
                                }} placeholder='Enter adverb with "ly"' onKeyDown={handleKeyDown}></input>
                            </Col>
                            <Col xs={3} className='d-flex flex-row align-self-end'>
                                <Button className="submitBtn" type="button" onClick={handleClick}>Submit</Button>
                            </Col>
                            <Col xs={2}></Col>
                        </Row>
                    </Container>
                    <Container className="mt-3 madlibTextCont">
                        <Row className="d-flex justify-content-center">
                            <Col xs={10} className="text-wrap text-center">
                            {isLoading ? (<p>Loading...</p>) : (<p>{madlibOutput}</p>)}
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                                <Nav.Link as={Link} to='/'><p className="backBtn text-center" >BACK</p></Nav.Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </>
    );
}
