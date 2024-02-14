import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './contact-form.styles.css';

const ContactForm = () => {
	return (
		<div id="contact">
			<h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
			<Jumbotron className="contact-jumbotron">
				<Row>
					<Col className="d-flex justify-content-center flex-wrap">
						<div className="m-2">
							<a href="mailto:7vik.sathvik@gmail.com" target="_blank" rel="noopener noreferrer">
								<Button variant="outline-danger" title="7vik.sathvik@gmail.com">
									<i className="fas fa-envelope-square"></i> Email Me
								</Button>
							</a>
						</div>
						<div className="m-2">
							<a
								href="https://www.linkedin.com/in/sathvik-vutukuri-aba1b960/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button variant="outline-primary" title="Visit my LinkenIn">
									<i className="fab fa-linkedin"></i> LinkedIn
								</Button>
							</a>
						</div>

						<div className="m-2">
							<a href="https://github.com/Pa1sathvik" target="_blank" rel="noopener noreferrer">
								<Button variant="outline-dark" title="My other projects">
									<i className="fab fa-github-square"></i> GitHub
								</Button>
							</a>
						</div>

						<div className="m-2">
							<a href="https://twitter.com/sathvikvutukuri" target="_blank" rel="noopener noreferrer">
								<Button variant="outline-info" title="Tweets are welcomed!">
									<i className="fab fa-twitter"></i> Twitter
								</Button>
							</a>
						</div>
						<div className="m-2">
							<a href="tel:8197748291" target="_blank" rel="noopener noreferrer">
								<Button variant="outline-warning" title="+91 8197748291">
									<i className="fas fa-mobile"></i> Call me
								</Button>
							</a>
						</div>
					</Col>
				</Row>
			</Jumbotron>
		</div>
	);
};

export default ContactForm;
