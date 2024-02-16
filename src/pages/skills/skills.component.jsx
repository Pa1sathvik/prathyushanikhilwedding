import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// skills
import { skills } from './skills-data';

import './skills.styles.css';

const Skills = () => {
	return (
		<div className="pt-3 pb-3" id="events">
			<h1 className="text-center font-details-b pb-4">WEDDING EVENTS</h1>
			<CardDeck>
				<Row className="d-flex justify-content-around">
					{/* Frontend */}
					<Col md={12}>
						<Card className="focus mt-2 mb-2">
							<Card.Body>
								{/* Frontend */}
								<Card.Title className="text-center  card-title">BRIDE MAKING CEREMONY</Card.Title>
								<hr />
								<Card.Text className="card-text d-flex justify-content-start flex-column">
									{skills.bride.map((skill, index) => (
										<><span className="p-2" key={index}>
										<a
											className="text-dark text-decoration-none"
											href={skill.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Image
												src={skill.imgSrc}
												alt={skill.imgAltText}
												rounded
												className='haldi-image'
												
											></Image>{' '}
											</a>
										</span>
										<strong className='pre-header'>"A Celebration of Anticipation: Witness the Bride Making Ceremony !!"</strong>
										<span className='event-message'>A ceremony of the bride's preparation precedes the wedding. Witness the beautiful tradition of the bride making ceremony 
										before the main event. Get ready for the giggles and happy tears! Join us for the bride's getting-ready party.</span>
										<div className='event-date'>
										<span>
											<strong>Event Date : </strong>
											February 29th, 2024 - Morning 10 AM IST
										</span>
										<br/>
										<span>
											<strong>Location : </strong>
											  <>Bride's home</>
										</span>
										</div>
										</>
										
											
									))}
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>

					<Col md={12}>
						<Card className="focus mt-2 mb-2">
							<Card.Body>
								{/* Frontend */}
								<Card.Title className="text-center  card-title">HALDI</Card.Title>
								<hr />
								<Card.Text className="card-text d-flex justify-content-start flex-column">
									{skills.frontend.map((skill, index) => (
										<><span className="p-2" key={index}>
										<a
											className="text-dark text-decoration-none"
											href={skill.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Image
												src={skill.imgSrc}
												alt={skill.imgAltText}
												rounded
												className='haldii-image'
												
											></Image>{' '}
											</a>
										</span>
										<strong className='pre-header'>"HALDI Kissed !!"</strong>
										<span className='event-message'>Haldi  is a pre-wedding ceremony performed a day or two before the wedding. Family members and friends playfully slather the bride and groom in a paste of turmeric, oil, and milk to prevent evil spirits from harming the to-be-wed couple.</span>
										<div className='event-date'>
										<span>
											<strong>Event Date : </strong>
											February 29th, 2024 - Noon 12 PM IST
										</span>
										<br/>
										<span>
											<strong>Location : </strong>
											  <>Bride's home</>
										</span>
										</div>
										</>
										
											
									))}
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>

					<Col md={12}>
						<Card className="focus mt-2 mb-2">
							<Card.Body>
								{/* Frontend */}
								<Card.Title className="text-center  card-title">MEHENDI</Card.Title>
								<hr />
								<Card.Text className="card-text d-flex justify-content-start flex-column">
									{skills.mehendi.map((skill, index) => (
										<><span className="p-2" key={index}>
										<a
											className="text-dark text-decoration-none"
											href={skill.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Image
												src={skill.imgSrc}
												alt={skill.imgAltText}
												rounded
												className='mehendi-image'
												
											></Image>{' '}
											</a>
										</span>
										<strong className='pre-header'>"Mehendi vibes on fleek!"</strong>
										<span className='event-message'>The green mehendi paste is applied to the hands and feet, which house the nerve endings in the body, to help calm the bride's nerves. It signified her confinement to her home until the wedding. </span>
										<div className='event-date'>
											
										<span>
											<strong>Event Date : </strong>
											February 29th, 2024 - Evening 7 PM IST
										</span>
										<br/>
										<span>
											<strong>Location : </strong>
											  <>Bride's home</>
										</span>
										</div>
										
										</>
										
											
									))}
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={12}>
						<Card className="focus mt-2 mb-2">
							<Card.Body>
								{/* Frontend */}
								<Card.Title className="text-center  card-title">GROOM WELCOME</Card.Title>
								<hr />
								<Card.Text className="card-text d-flex justify-content-start flex-column">
									{skills.groomWelcome.map((skill, index) => (
										<><span className="p-2" key={index}>
										<a
											className="text-dark text-decoration-none"
											href={skill.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Image
												src={skill.imgSrc}
												alt={skill.imgAltText}
												rounded
												className='haldi-image'
												
											></Image>{' '}
											</a>
										</span>
										<strong className='pre-header'>From Our Family to Yours, Welcome Aboard !!</strong>
										<span className='event-message'>From here on out, consider this your home away from home. We're always here to lend a hand, share a laugh, and offer another plate at the dinner table. We can't wait to celebrate your love officially at the wedding, but know that even beyond that special day, our doors are always open.</span>
										<div className='event-date'>
										<span>
											<strong>Event Date : </strong>
											March 1st, 2024 - Noon 2:30 PM IST
										</span>
										<br/>
										<span>
											<strong>Location : </strong>
											  <>Bride's home</>
										</span>
										</div>
										</>
										
											
									))}
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>

					<Col md={12}>
						<Card className="focus mt-2 mb-2">
							<Card.Body>
								{/* Frontend */}
								<Card.Title className="text-center  card-title">SANGEET & RECEPTION</Card.Title>
								<hr />
								<Card.Text className="card-text d-flex justify-content-start flex-column">
									{skills.sangeet.map((skill, index) => (
										<><span className="p-2" key={index}>
										<a
											className="text-dark text-decoration-none"
											href={skill.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Image
												src={skill.imgSrc}
												alt={skill.imgAltText}
												rounded
												className='sangeet-image'
												
											></Image>{' '}
											</a>
										</span>
										<strong className='pre-header'>"Love, Laughter, and the Dance Floor Awaits: Celebrate Our Wedding Reception"</strong>
										<span className='event-message'>Buckle up for good vibes and good times! Get ready to celebrate our love with delicious eats, flowing drinks, and an epic dance party that'll keep you moving all night long. Let's make some memories that will last a lifetime!!</span>
										<div className='event-date'>
										<span>
											<strong>Event Date : </strong>
											March 1st, 2024 - Evening 7 PM IST onwards followed by Dinner.
										</span>
										</div>
										</>
										
											
									))}
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={12}>
						<Card className="focus mt-2 mb-2">
							<Card.Body>
								{/* Frontend */}
								<Card.Title className="text-center  card-title">KALYANAM</Card.Title>
								<hr />
								<Card.Text className="card-text d-flex justify-content-start flex-column">
									{skills.kalyanam.map((skill, index) => (
										<><span className="p-2" key={index}>
										<a
											className="text-dark text-decoration-none"
											href={skill.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Image
												src={skill.imgSrc}
												alt={skill.imgAltText}
												rounded
												className='wedding-image'
												
											></Image>{' '}
											</a>
										</span>
										<strong className='pre-header'>HALDI Kissed !!</strong>
										<span className='event-message'>Haldi  is a pre-wedding ceremony performed a day or two before the wedding. Family members and friends playfully slather the bride and groom in a paste of turmeric, oil, and milk to prevent evil spirits from harming the to-be-wed couple.</span>
										<div className='event-date'>
										<span>
											<strong>Event Date : </strong>
											February 17th, 2024 - Morning 7 AM IST
										</span>
										</div>
										</>
										
											
									))}
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					
					
				</Row>
			</CardDeck>
		</div>
	);
};

export default Skills;
