import { SayHello } from "../Services/DataService";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Nav, NavbarBrand } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function Hello() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");// this hook is used to display the greeting. It initializes the state to an empty string. Then when the button is clicked the SayHello function is called and the returned data is saved to greeting. (the data is returned as text, via response.text()). setGreeting returns the text data with user input from the endpoint and displays it in browser.
  const [isLoading, setIsLoading] = useState(false);// this hook uses a boolean to show that the data is being fetched after submission. It is initialized to false to that the 'Loading...' text does not show until the data is being fetched, at which point the useState will be set to true and after the data is fetched and displayed, it will switch back to false. See below.

  const handleClick = async () => {
    setIsLoading(true);//display 'Loading...'
    const greeting = await SayHello(name);// saves text data from endpoint to greeting and passed into setGreeting
    setGreeting(greeting);// will return 'Hello {name}, nice to meet you!'
    setIsLoading(false);// hide 'Loading...'
  };
  return (
    <>
      <Nav className="navbar">
        <Container>
          <Row className='justify-space-between w-100'>
            <Col xs={6} className='d-flex flex-column justify-content-start'>
              <NavbarBrand className="sloganText">Say Hello</NavbarBrand>
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
          <Row>
            <Col xs={12} className='text-center mb-3'>
              <h1 className='selectText my-2'>Enter Your Name</h1>
            </Col>
          </Row>
          <Container className="d-flex justify-content-center mt-3 mx-4 p-0">
            <Row>
              <Col xs={6} className='mb-5'>
                <input className="numberInput m-0" placeholder="Enter name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </Col>
              <Col xs={6}>
                <Button className="mx-3 submitBtn" onClick={handleClick}>Submit</Button>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="text-center">
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <p>{`${greeting}`}</p>
              )}
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