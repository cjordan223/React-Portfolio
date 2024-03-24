import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CarouselComponent() {
    return (
        <Carousel id="projectsCarousel">
            <Carousel.Item>
                <Link to="/webapps">
                    <img
                        className="carousel-image d-block w-100"
                        src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="First slide"
                    />
                    <Carousel.Caption className="custom-caption">
                        <h3>Web Applications</h3>
                        <p>A collection of apps I've made as I've continued along my program at CSUMB.</p>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to="/programming">
                    <img
                        className="carousel-image d-block w-100"
                        src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="custom-caption">
                        <h3>Programming Projects</h3>
                        <p>A collection of basic programming projects highlighting various algorithm and security principles.</p>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to="/webdesign">
                    <img
                        className="carousel-image d-block w-100"
                        src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="custom-caption">
                        <h3>Web Design</h3>
                        <p>Websites I created during my time as a freelance designer.</p>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;
