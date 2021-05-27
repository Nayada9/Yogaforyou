import React from 'react';
import { Form } from 'react-bootstrap';
import { Container, Button } from 'react-bootstrap';




export const Contacts = () => (
    <>
        <Container style={{ width: '500px' }}>
            <h1 className="text-center">Contact us</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email email" />
                    <Form.Text>We'll never share your email with anyone else</Form.Text>
                </Form.Group>


                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Your message</Form.Label>
                    <Form.Control type="textarea" row="4" />

                </Form.Group>



                <Form.Group controlId="formCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    <Form.Control type="check" />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>

            </Form>
        </Container>
    </>

)