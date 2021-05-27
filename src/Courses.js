import React from 'react';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';
import yogacard1 from './Photo/yogacard1.jpeg';
import yogacard2 from './Photo/yogacard2.jpeg';
import yogacard3 from './Photo/yogacard3.jpeg';
import yogacard4 from './Photo/yogacard4.jpeg';
import yogacard5 from './Photo/yogacard5.jpeg';
import yogacard6 from './Photo/yogacard6.jpeg';


export const Courses = () => (

    <>
        <h1 class="text-center">Our courses</h1>

        <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>

            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={yogacard1} />
                    <Card.Body>
                        <Card.Title>Meditation</Card.Title>
                        <Card.Text class="text-justify">
                            « Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »
      </Card.Text>
                        <Button variant="primary" size="lg" block>Buy now $10</Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src={yogacard2} />
                    <Card.Body>
                        <Card.Title>Flexible body</Card.Title>
                        <Card.Text class="text-justify">
                            « Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »{' '}
                        </Card.Text>
                        <Button variant="primary" size="lg" block>Buy now $10</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={yogacard3} />
                    <Card.Body>
                        <Card.Title>Yoga for posture</Card.Title>
                        <Card.Text class="text-justify">
                            « Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »

      </Card.Text>
                        <Button variant="primary" size="lg" block>Buy now $10</Button>
                    </Card.Body>
                </Card>
            </CardDeck>

            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={yogacard4} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text class="text-justify">
                            « Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »

      </Card.Text>
                        <Button variant="primary" size="lg" block>Buy now $10</Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src={yogacard5} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text class="text-justify">
                            « Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »
        content.{' '}
                        </Card.Text>
                        <Button variant="primary" size="lg" block>Buy now $10</Button>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src={yogacard6} />

                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text class="text-justify">
                            « Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »
      </Card.Text>
                        <Button variant="primary" size="lg" block>Buy now $10</Button>
                    </Card.Body>

                </Card>
            </CardDeck>

        </Container>
    </>
)
