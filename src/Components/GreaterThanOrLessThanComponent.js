import { GreaterThanOrLessThan } from "../Services/DataService";
import { Button, Container, Col, Row, Nav, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function GreaterorLess() {
  const [numberOne, setNumberOne] = useState('');
  const [numberTwo, setNumberTwo] = useState('');
  const [compare, getCompare] = useState('');
  const [isLoading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    const compare = await GreaterThanOrLessThan(numberOne, numberTwo);
    getCompare(compare);
    setLoading(false);
  }
  return (
    <>
      <Nav className="navbar">
        <Container>
          <Row className='justify-space-between w-100'>
            <Col xs={6} className='d-flex flex-column justify-content-start'>
              <NavbarBrand className="sloganText">Greater Than Or Less Than</NavbarBrand>
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
        <div className='btnsDiv mt-5'>
          <Row>
            <Col xs={12} className='text-center'>
              <h1 className='selectText my-2'>Enter Two Numbers</h1>
            </Col>
          </Row>
          <Row className='d-flex justify-content-center mt-4'>
            <Col xs={6} className='d-flex flex-column align-items-end p-0'>
              <input onChange={(event) => {
                setNumberOne(event.target.value);
              }} className='numberInput mb-2' placeholder="Enter number"></input>
              <input onChange={(event) => {
                setNumberTwo(event.target.value);
              }} className='numberInput' placeholder="Enter number"></input>
            </Col>
            <Col xs={6} className='d-flex flex-row align-self-end'>
              <Button onClick={handleClick} className='submitBtn'>Submit</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className='mt-5 text-center'>
              {isLoading ? (<p>Loading...</p>) : (<p>{compare}</p>)}
            </Col>
          </Row>
          <Container>
            <Row>
              <Nav.Link className="backBtn" as={Link} to='/'><p className="text-center">BACK</p></Nav.Link>
            </Row>
          </Container>
        </div>
      </Container >
    </>
  )
}