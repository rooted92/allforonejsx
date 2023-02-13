import { Row, Col, Container, Button, Nav, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddTwoNumbers } from '../Services/DataService';
import { useState } from "react";

export default function Addition() {
  const [numOne, setNumOne] = useState('');
  const [numTwo, setNumTwo] = useState('');
  const [add, setAddition] = useState('');
  const [isLoading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    const add = await AddTwoNumbers(numOne, numTwo);
    setAddition(add);
    setLoading(false);
  }
  return (
    <div>
      <Nav className="navbar">
        <Container>
          <Row className='justify-space-between w-100'>
            <Col xs={6} className='d-flex flex-column justify-content-start'>
              <NavbarBrand className="sloganText">Add Two Numbers</NavbarBrand>
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
          <Container>
            <Row >
              <Col className='text-center mb-3'>
                <h1 className='selectText my-2'>Enter two numbers:</h1>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xs={2}></Col>
              <Col xs={5} className='d-flex flex-column align-items-end'>
                <input placeholder='Enter number' className='numberInput mb-2' onChange={(event) => {
                  setNumOne(event.target.value);
                }}></input>
                <input placeholder='Enter number' className='numberInput' onChange={(event) => {
                  setNumTwo(event.target.value);
                }}></input>
              </Col>
              <Col xs={5} className='d-flex flex-row align-self-end'>
                <Button className='submitBtn' onClick={handleClick}>Add Numbers</Button>
              </Col>
            </Row>
          </Container>
          <Container className='mt-5'>
            <Row>
              <Col className='text-center'>
                {
                  isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <p>{`${add}`}</p>
                  )
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
    </div>
  );
}