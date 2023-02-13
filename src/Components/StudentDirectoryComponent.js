import { Row, Col, Container, Button, Nav, NavbarBrand, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetStudentEmail, GetStudentFirstName, GetStudentLastName, GetStudentSlackName } from '../Services/DataService';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";


export default function StudentDirectory() {
    const [dataEntry, setEntry] = useState('');
    const [showStudentData, setStudentData] = useState('');
    const [studentList, setStudentList] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        async function PopulateList() {
            const response = await fetch('https://pedrosallforone.azurewebsites.net/minichallenges/GetStudentList');
            const data = await response.json();
            console.log('Called in useEffect');
            setStudentList(data);
        }
        PopulateList();
    }, []);

    const handleClickByFirstName = async () => {
        setLoading(true);
        const showStudentData = await GetStudentFirstName(dataEntry);
        setStudentData(showStudentData);
        setLoading(false);
    }

    const handleClickByLastName = async () => {
        setLoading(true);
        const showStudentData = await GetStudentLastName(dataEntry);
        setStudentData(showStudentData);
        setLoading(false);
    }

    const handleClickBySlackName = async () => {
        setLoading(true);
        const showStudentData = await GetStudentSlackName(dataEntry);
        setStudentData(showStudentData);
        setLoading(false);
    }

    const handleClickByEmail = async () => {
        setLoading(true);
        const showStudentData = await GetStudentEmail(dataEntry);
        setStudentData(showStudentData);
        setLoading(false)
    }

    return (
        <>
            <Nav className="navbar">
                <Container>
                    <Row className='justify-space-between w-100'>
                        <Col xs={6} className='d-flex flex-column justify-content-start'>
                            <NavbarBrand className="sloganText">Student Directory</NavbarBrand>
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
                                <h1 className='selectText text-center'>Search Directory</h1>
                            </Col>
                        </Row>
                    </Container>
                    <Container className='mt-3'>
                        <Container>
                            <Row>
                                {/* Tomorrow try using a dropdown not select */}
                                <Col className='d-flex justify-content-center'>
                                    <Form.Select onChange={async (event) => {
                                        console.log(event.target.value);
                                        setStudentData(await GetStudentFirstName(event.target.value));
                                    }} className='dropdownMenu' aria-label="Default select example">
                                        <option className='optionItem'>Student List</option>
                                        {      //CONDITIONAL RENDERING pattern in react
                                            studentList ? (//if student list is truthy populate list via .map
                                                studentList.map((student, index) => {
                                                    return (<option className='optionItem' value={student.firstName} key={index}>{student.firstName} {student.lastName}</option>)
                                                })
                                            ) : (//else if falsey (NaN, '', null, undefined, 0) display list is empty
                                                'List is empty...'
                                            )
                                        }
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Container>
                        <hr className='breakLine'></hr>
                        <p className='text-center'>Search by student info:</p>
                    </Container>
                    <Container>
                        <Row>
                            <Col xs={6} className='d-flex flex-column align-items-end p-0'>
                                <input className='studentInput mb-2 mx-4' placeholder='First name' onChange={(event) => {
                                    setEntry(event.target.value);
                                }}></input>
                                <Button className='submitBtn mx-4' onClick={handleClickByFirstName}>Submit</Button>
                            </Col>
                            <Col xs={6} className="d-flex flex-column align-items-start p-0">
                                <input className='studentInput mb-2 mx-4' placeholder='Last name' onChange={(event) => {
                                    setEntry(event.target.value);
                                }}></input>
                                <Button className='submitBtn mx-4' onClick={handleClickByLastName}>Submit</Button>
                            </Col>
                        </Row>
                        <Row className='mt-4'>
                            <Col xs={6} className='d-flex flex-column align-items-end p-0'>
                                <input className='studentInput mb-2 mx-4' placeholder='Slack name' onChange={(event) => {
                                    setEntry(event.target.value);
                                }}></input>
                                <Button className='submitBtn mx-4' onClick={handleClickBySlackName}>Submit</Button>
                            </Col>
                            <Col xs={6} className="d-flex flex-column align-items-start p-0">
                                <input className='studentInput mb-2 mx-4' placeholder='Email' onChange={(event) => {
                                    setEntry(event.target.value);
                                }}></input>
                                <Button className='submitBtn mx-4' onClick={handleClickByEmail}>Submit</Button>
                            </Col>
                        </Row>
                    </Container>
                    <Container className='mt-3'>
                        <Row>
                            <Col>
                                {
                                    isLoading ? (<p>Loading...</p>) : (
                                        <Container>
                                            <Row>
                                                <Col xs={3}></Col>
                                                <Col xs={3} className='d-flex flex-column align-items-start'>
                                                    <p className='m-0'>First Name:</p>
                                                    <p className='m-0'>Last Name:</p>
                                                    <p className='m-0'>Slack Name:</p>
                                                    <p className='m-0'>Email:</p>
                                                    <p className='m-0'>Hobbies:</p>
                                                </Col>
                                                <Col xs={5} className='d-flex flex-column align-items-start'>
                                                    <p className='m-0'>{showStudentData.firstName}</p>
                                                    <p className='m-0'>{showStudentData.lastName}</p>
                                                    <p className='m-0'>{showStudentData.slackName}</p>
                                                    <p className='m-0'>{showStudentData.email}</p>
                                                    <p className='m-0'>{showStudentData.hobbies}</p>
                                                </Col>
                                                {/* <Col xs={1}></Col> */}
                                            </Row>
                                        </Container>
                                    )
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