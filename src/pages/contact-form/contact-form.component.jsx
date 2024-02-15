import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './contact-form.styles.css';

const ContactForm = () => {
	return (
		<div id="contact">
			<h1 className="pt-3 text-center font-details-b pb-3">FOR ANY DETAILS Call Please !!</h1>
			<Jumbotron className="contact-jumbotron">
				<div className='root'>
				<div className='groom'><strong className='name'>Groom Contacts:</strong>
				<Row>
					<Col className="d-flex justify-content-center flex-wrap">
						
						<div className="m-2">
							<a href="tel:8197748291" target="_blank" rel="noopener noreferrer">
								<Button variant="outline-warning" title="+91 8197748291">
									<i className="fas fa-mobile"></i> Call me
								</Button>
							</a>
						</div>
					</Col>
				</Row>
				<Row>
					<Col className="d-flex justify-content-center flex-wrap">
						
						<div className="m-2">
							<a href="tel:8197748291" target="_blank" rel="noopener noreferrer">
								<Button variant="outline-warning" title="+91 8197748291">
									<i className="fas fa-mobile"></i> Call me
								</Button>
							</a>
						</div>
					</Col>
				</Row></div>
					<div className='bride'><strong className='name'>Bride Contacts:</strong>
				<Row>
					<Col className="d-flex justify-content-center flex-wrap">
						
						<div className="m-2">
							<a href="tel:8197748291" target="_blank" rel="noopener noreferrer">
								<Button variant="outline-warning" title="+91 8197748291">
									<i className="fas fa-mobile"></i> Call me
								</Button>
							</a>
						</div>
					</Col>
				</Row>
				<Row>
					<Col className="d-flex justify-content-center flex-wrap">
						
						<div className="m-2">
							<a href="tel:8197748291" target="_blank" rel="noopener noreferrer">
								<Button variant="outline-warning" title="+91 8197748291">
									<i className="fas fa-mobile"></i> Call me
								</Button>
							</a>
						</div>
					</Col>
				</Row></div>
				
				</div>
				
				
			</Jumbotron>
			
		</div>
	);
};

export default ContactForm;
