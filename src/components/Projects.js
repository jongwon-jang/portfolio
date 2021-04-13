import React from 'react';
import { Container, Card, Button, Carousel, Row, Col } from 'react-bootstrap';
import img from '../images/project_image.jpeg';
import mainImg from '../images/mainImg.jpeg';

const Projects = () => {
	return (
		<div>
			<Container className="main-projects mt-5">
				<h3 className="text-center">Projects</h3>
				<Row xs={1} md={3}>
					<Col>
						<Card className="w-100 mb-3">
							<Card.Img variant="top" src={mainImg} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="w-100 mb-3">
							<Card.Img variant="top" src={mainImg} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="w-100 mb-3">
							<Card.Img variant="top" src={mainImg} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>

			<Container className="sub-projects">
				<Carousel>
					<Carousel.Item interval={1000}>
						<img className="d-block w-100" src={img} alt="First slide" />
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img className="d-block w-100" src={img} alt="Second slide" />
						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={img} alt="Third slide" />
						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Container>
		</div>
	);
};

export default Projects;
