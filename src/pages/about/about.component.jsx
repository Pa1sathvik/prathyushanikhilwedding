import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.styles.css';
import Button from 'react-bootstrap/Button';

const About = () => {
	return (
		<div id="about">
			<div className="about">
				<h1 className="pt-3 text-center font-details pb-3">ABOUT US</h1>
				<Container>
					<Row className="pt-3 pb-5 align-items-center introduction">
						<Col xs={12} md={12} >
							
							<Row className="align-items-start p-2 my-details rounded">
							
							Hey everyone, welcome to our little corner of the web!
							<br/><br/>We're  Nikhil and  Prathyusha,
							 and we're beyond excited to celebrate our wedding with you on March 2nd!! 
								<br />
								<br />
								Nikhil, thrives as a Software Design Engineer at Tektronix, crafting solutions that shape the future. But beyond the lines of code lies a warm heart full of kindness, humor, and unwavering support. He's the first to lend a hand, always up for an adventure, and his gentle nature brings a sense of calm and stability to any situation.
								<br/>
								<br />
								Prathyusha, a spirited and independent woman, brings her passion for technology and expertise as a Networking Senior Specialist at NTT Data to every aspect of life. With a vibrant smile and a quick wit, she lights up any room and brings joy to those around her.
								<br />
								<Col className="d-flex justify-content-center flex-wrap">
									<div>
										<a href="#contact">
											<Button className="m-2" variant="outline-primary">
												Let's talk
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
