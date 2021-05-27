import React from 'react';
import Slider from './Components/Slider';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import yogamountains from './Photo/yogamountains.jpeg';
import yogakamni from './Photo/yogakamni.jpeg';
import yogaredhair from './Photo/yogaredhair.jpeg';
import yogaslon from './Photo/yogaslon.jpeg';



export const Home = () => (
<>
        <Slider />

        <Container style={{ paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={yogaredhair} />
                        <Card.Body>
                            <Card.Title>Yoga for beginners</Card.Title>
                            <Card.Text>
                                100 hours for Strong Body.
                </Card.Text>
                            <Button variant="primary">Find out more</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={yogakamni} />
                        <Card.Body>
                            <Card.Title>Yoga for beginners</Card.Title>
                            <Card.Text>
                            100 hours - Relax and Refresh.
                </Card.Text>
                            <Button variant="primary">Find out more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={yogaslon} />
                        <Card.Body>
                            <Card.Title>Yoga for beginners</Card.Title>
                            <Card.Text>
                                200 hours for Flexible Body.
                </Card.Text>
                            <Button variant="primary">Find out more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    <Container style={{marginBottom:'30px'}}>
            <Row>
                <Col md={7}>
                    <img src={yogamountains} height={400} />
                </Col>
                <Col md={5}>
                    <h2>Yoga for you</h2>
                    <p class="text-justify">« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »
                    « Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »
            
                         </p>
                </Col>
            </Row>
            
        </Container>


    </>
)