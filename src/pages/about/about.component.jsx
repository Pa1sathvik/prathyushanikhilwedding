import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.styles.css';
import Profile from '../../assets/img/profile/profile.webp';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const About = () => {
	return (
		<div id="about">
			<div className="about">
				<h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
				<Container>
					<Row className="pt-3 pb-5 align-items-center introduction">
						<Col xs={12} md={12}>
							<Row className="align-items-start p-2 my-details rounded">
								Hi there! I am <strong>&nbsp;Vutukuri Sathvik</strong> 
								<br/>
								A passionate programmer and a learner, I was born and raised in Andhra Pradesh, India, and 
								I am a full stack web developer with React.js, Redux, Java, Spring Boot, Junit, and Oracle, Mongo DB in my tech stack.
								<br />
								I graduated from engineering school in 2015 with a specialization in computer science engineering.
								My goal is always to provide amazing experiences to my clients with the best level of quality and service. I love learning about new technologies and 
								how I can use them to build better and scalable products.
								<br />
								In my 8 years of experience as a full stack developer, I have learned a lot about full stack development and architecture design. 
								I believe in the motto work hard which has helped me solve many problems in my career.
								<br />
								<Col className="d-flex justify-content-center flex-wrap">
									<div>
										<a href="#contact">
											<Button className="m-2" variant="outline-primary">
												Let's talk
											</Button>
										</a>
									</div>
									<div>
										<a
											href="https://drive.google.com/file/d/13pLoa3YhSmbNqXG5LXTU-4hbD84PVvAx/view?usp=sharing"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Button className="m-2" variant="outline-success">
												My Resume
											</Button>
										</a>
									</div>
									<div>
										<a
											href="https://github.com/Pa1sathvik"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Button className="m-2" variant="outline-dark">
												GitHub
											</Button>
										</a>
									</div>
									<div>
										<a
											href="https://www.linkedin.com/in/sathvik-vutukuri-aba1b960/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Button className="m-2" variant="outline-info">
												LinkedIn
											</Button>
										</a>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default About;
