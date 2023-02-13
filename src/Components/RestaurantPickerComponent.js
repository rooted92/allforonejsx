import { Row, Col, Container, Button, Nav, NavbarBrand } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetAmericanRestaurantData, GetAsianRestaurantData, GetEuropeanRestaurantData, GetLatinRestaurantData } from '../Services/DataService';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function RestaurantPicker() {
    const [isLoading, setLoading] = useState(false);
    const [recommendation, setRecommendation] = useState('');

    const handleClickAsianPick = async () => {
        setLoading(true);
        const recommendation = await GetAsianRestaurantData();
        setRecommendation(recommendation);
        setLoading(false);
    }

    const handleClickAmericanPick = async () => {
        setLoading(true);
        const recommendation = await GetAmericanRestaurantData();
        setRecommendation(recommendation);
        setLoading(false);
    }

    const handleClickLatinPick = async () => {
        setLoading(true);
        const recommendation = await GetLatinRestaurantData();
        setRecommendation(recommendation);
        setLoading(false);
    }

    const handleClickEuropeanClick = async () => {
        setLoading(true);
        setRecommendation(await GetEuropeanRestaurantData());
        setLoading(false);
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
                <div className='btnsDiv'>
                    <Container className='my-3'>
                        <Row>
                            <Col>
                                <h1 className='selectText text-center'>Select Category</h1>
                            </Col>
                        </Row>
                    </Container>
                    <Container className='my-3'>
                        <Row>
                            <Col className='d-flex flex-column align-items-center'>
                                <Button className='resPickBtn mb-2' type='button' onClick={handleClickLatinPick}>Latin</Button>
                                <Button className='resPickBtn mb-2' type='button' onClick={handleClickAsianPick}>Asian</Button>
                                <Button className='resPickBtn mb-2' type='button' onClick={handleClickAmericanPick}>American</Button>
                                <Button className='resPickBtn mb-2' type='button' onClick={handleClickEuropeanClick}>European</Button>
                            </Col>
                        </Row>
                    </Container>
                    <Container className='mt-3'>
                        <Row>
                            <Col className='text-center'>
                            {
                                isLoading ? (<p>Loading...</p>) : <p>{recommendation}</p>
                            }
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                            <Nav.Link className='backBtn text-center' as={Link} to='/'>BACK</Nav.Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </>
    );
}