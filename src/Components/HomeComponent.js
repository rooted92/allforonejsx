import { Button, Container, Col, Row, Nav, NavbarBrand } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function HomePage() {

    return (
        <>
            <Nav className="navbar">
                <Container>
                    <Row className='justify-space-between w-100'>
                        <Col xs={6} className='d-flex flex-column justify-content-start'>
                            <NavbarBrand className="sloganText">All For One</NavbarBrand>
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
                        <Col xs={12} className='text-center'>
                            <h1 className='selectText my-2'>Select Option</h1>
                        </Col>
                    </Row>
                    <Row className='flex-column align-content-center'>
                        <Button className='optionBtn my-2' as={Link} to='SayHello'>Say Hello</Button>
                        <Button className='optionBtn mb-2' as={Link} to='AddTwoNumbers'>Add Two Numbers</Button>
                        <Button className='optionBtn mb-2' as={Link} to='AskingQuestions'>Asking Questions</Button>
                        <Button className='optionBtn mb-2' as={Link} to='OddOrEven' >Odd or Even</Button>
                        <Button className='optionBtn mb-2' as={Link} to='GreaterThanOrLessThan' >Greater Than or Less Than</Button>
                        <Button className='optionBtn mb-2' as={Link} to='Madlib' >Madlib</Button>
                        <Button className='optionBtn mb-2' as={Link} to='ReverseIt' >Reverse It</Button>
                        <Button className='optionBtn mb-2' as={Link} to='StudentDirectory' >Student Directory</Button>
                        <Button className='optionBtn mb-5' as={Link} to='RestaurantPicker' >Restaurant Picker</Button>
                    </Row>
                </div>
            </Container>
        </>
    );
}