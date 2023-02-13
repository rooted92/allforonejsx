import { Row, Col, Container, Button, Nav, NavbarBrand } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AskingQuestions } from '../Services/DataService';
import { Link } from 'react-router-dom';
import { useState } from "react";
 
export default function Questions() {
  const [name, setName] = useState('');// this hook has value of name as empty string initially
  const [time, setTime] = useState('');// same with time
  const [reply, getReply] = useState('');// this hook will return the response from the endpoint
  const [isLoading, setLoading] = useState(false);// this hook will set the loading txt as false initially
  const handleClick = async () => {
    setLoading(true);
    const reply = await AskingQuestions(name, time);
    getReply(reply);
    setLoading(isLoading);
  }
  return (
    <>
      <Nav className="navbar">
        <Container>
          <Row className='justify-space-between w-100'>
            <Col xs={6} className='d-flex flex-column justify-content-start'>
              <NavbarBrand className="sloganText">Asking Questions</NavbarBrand>
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
              <Col xs={12} className='text-center'>
                <h1 className='selectText'>Questions</h1>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xs={2}></Col>
              <Col xs={5} className='d-flex flex-column justify-content-end p-0'>
                <input className='textInput mb-2' placeholder='What is your name?' onChange={(event) => {
                  setName(event.target.value);
                }}></input>
                <input className='textInput' placeholder='What time did you wake up?' onChange={(event) => {
                  setTime(event.target.value);
                }}></input>
              </Col>
              <Col xs={4} className='d-flex flex-row align-self-end justify-content-center'>
                <Button className='submitBtn' onClick={handleClick}>Submit</Button>
              </Col>
              <Col xs={1}></Col>
            </Row>
          </Container>
          <Container className='mt-3'>
            <Row>
              <Col className='text-center'>
                {
                  isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <p>{reply}</p>
                  )
                }
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <Nav.Link className="backBtn" as={Link} to='/'><p className="text-center">BACK</p></Nav.Link>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>

    </>
  );
}