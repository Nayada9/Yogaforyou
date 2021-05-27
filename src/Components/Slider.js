import React from 'react';
import { Carousel } from 'react-bootstrap';
import yogamountains from '../Photo/yogamountains.jpeg';
import yogawomen from '../Photo/yogawomen.jpeg';
import yogafire from '../Photo/yogafire.jpeg';

export default function Slider() {
    return (
        <Carousel>
            <Carousel.Item style={{ 'height': '600px' }}>
                <img className="d-block w-100"
                    src={yogamountains}
                    alt="First slide"

                />
                <Carousel.Caption>
                    <h3>Yoga for you</h3>
                    <p>Health and Beauty</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ 'height': '600px' }}>
                <img className="d-block w-100"
                    src={yogawomen}
                    alt="Second slide"

                />
                <Carousel.Caption>
                    <h3>Yoga for you</h3>
                    <p>Yoga everyday!</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ 'height': '600px' }}>
                <img className="d-block w-100"
                    src={yogafire}
                    alt="Third Slide"

                />
                <Carousel.Caption>
                    <h3>Yoga for you</h3>
                    <p>Keep calm, Relaxing and Refreshing!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}