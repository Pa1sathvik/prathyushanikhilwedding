import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
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
												className='haldi-image img-fluid'
												
											></Image>{' '}
											</a>
										</span>
										<strong className='pre-header'>"A Celebration of Anticipation: Witness the Bride Making Ceremony !!"</strong>
										<span className='event-message'>A ceremony of the bride's preparation precedes the wedding. Witness the beautiful tradition of the bride making ceremony 
										before the main event. Get ready for the giggles and happy tears! Join us for the bride's getting-ready party.</span>
										<div className='event-date'>
										
										<span>
											<strong>Event Date : </strong>
											<strong>February 29th, 2024 - Morning 10 AM IST</strong>
										</span>
										
										<span>
											<strong>Location : </strong>
											<Button variant="link" className='location' href="https://www.google.com/maps/place/10%2F457,+Municipality+Office+Area,+Zph+Boys+High+School+Ground,+Markapur,+Andhra+Pradesh+523316/@15.7413703,79.2699964,20z/data=!4m14!1m7!3m6!1s0x3bb531fc27dfe1cb:0xc2487677f77f7d6c!2sSatayamma+thalli+nilayam!8m2!3d15.7416128!4d79.269972!16s%2Fg%2F11hyxp6g4m!3m5!1s0x3bb5319851cce7cd:0x6954fb67b3ef2f52!8m2!3d15.7416084!4d79.2699631!16s%2Fg%2F11kq41pqw5?entry=ttu" target="_blank">Bride's Home - Srinivasa Nilayam, Markapur</Button>
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
												className='haldii-image img-fluid'
												
											></Image>{' '}
											</a>
										</span>
										<strong className='pre-header'>"HALDI Kissed !!"</strong>
										<span className='event-message'>Haldi  is a pre-wedding ceremony performed a day or two before the wedding. Family members and friends playfully slather the bride in a paste of turmeric, oil, and milk to prevent evil spirits from harming the to-be-wed couple.</span>
										<div className='event-date'>
										<span>
											<strong>Haldi Dresscode : </strong>
											<strong className='yellow'>Yellow</strong>
											
										</span>
										<span>
											<strong>Event Date : </strong>
											<strong>February 29th, 2024 - Noon 12 PM IST</strong>
										</span>
										
										<span>
											<strong>Location : </strong>
											<Button variant="link" className='location' href="https://www.google.com/maps/place/10%2F457,+Municipality+Office+Area,+Zph+Boys+High+School+Ground,+Markapur,+Andhra+Pradesh+523316/@15.7413703,79.2699964,20z/data=!4m14!1m7!3m6!1s0x3bb531fc27dfe1cb:0xc2487677f77f7d6c!2sSatayamma+thalli+nilayam!8m2!3d15.7416128!4d79.269972!16s%2Fg%2F11hyxp6g4m!3m5!1s0x3bb5319851cce7cd:0x6954fb67b3ef2f52!8m2!3d15.7416084!4d79.2699631!16s%2Fg%2F11kq41pqw5?entry=ttu" target="_blank">Bride's Home - Srinivasa Nilayam, Markapur</Button>
										
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
												className='mehendi-image img-fluid'
												
											></Image>{' '}
											</a>
										</span>
										<strong className='pre-header'>"Mehendi vibes on fleek!"</strong>
										<span className='event-message'>The green mehendi paste is applied to the hands and feet, which house the nerve endings in the body, to help calm the bride's nerves. It signified her confinement to her home until the wedding. </span>
										<div className='event-date'>
											
										<span>
											<strong>Mehendi Dresscode : </strong>
											<strong className='green'>Green</strong>
										</span>
										<span>
											<strong>Event Date : </strong>
											<strong>February 29th, 2024 - Evening 7 PM IST</strong>
										</span>
										
										<span>
											<strong>Location : </strong>
											<Button variant="link" className='location' href="https://www.google.com/maps/place/10%2F457,+Municipality+Office+Area,+Zph+Boys+High+School+Ground,+Markapur,+Andhra+Pradesh+523316/@15.7413703,79.2699964,20z/data=!4m14!1m7!3m6!1s0x3bb531fc27dfe1cb:0xc2487677f77f7d6c!2sSatayamma+thalli+nilayam!8m2!3d15.7416128!4d79.269972!16s%2Fg%2F11hyxp6g4m!3m5!1s0x3bb5319851cce7cd:0x6954fb67b3ef2f52!8m2!3d15.7416084!4d79.2699631!16s%2Fg%2F11kq41pqw5?entry=ttu" target="_blank">Bride's Home - Srinivasa Nilayam, Markapur</Button>
										
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
								<Card.Title className="text-center  card-title">WELCOMING THE GROOM</Card.Title>
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
												className='groom-image'
												
											></Image>{' '}
											</a>
										</span>
										<strong className='pre-header'>"From Our Family to Yours, Welcome Aboard !!"</strong>
										<span className='event-message'>From here on out, consider this your home away from home. We're always here to lend a hand, share a laugh, and offer another plate at the dinner table. We can't wait to celebrate your love officially at the wedding, but know that even beyond that special day, our doors are always open.</span>
										<div className='event-date'>
										<span>
											<strong>Event Date : </strong>
											<strong>March 1st, 2024 - Noon 2 PM IST</strong>
										</span>
										
										<span>
											<strong>Location : </strong>
											<Button variant="link" className='location' href="https://www.google.com/maps/place/Hotel+Seven+Hills/@15.7440341,79.2725726,17z/data=!3m1!4b1!4m9!3m8!1s0x3bb5318aa77361cd:0x76def16a45584fac!5m2!4m1!1i2!8m2!3d15.7440341!4d79.2751475!16s%2Fg%2F11h2fqf3dg?entry=ttu" target="_blank">Seven Hills Function Hall, Markapur</Button>
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
											<strong>March 1st, 2024 - Evening 7 PM IST.</strong>
										</span>
										
										<span>
											<strong>Location : </strong>
											<Button variant="link" className='location' href="https://www.google.com/maps/place/Hotel+Seven+Hills/@15.7440341,79.2725726,17z/data=!3m1!4b1!4m9!3m8!1s0x3bb5318aa77361cd:0x76def16a45584fac!5m2!4m1!1i2!8m2!3d15.7440341!4d79.2751475!16s%2Fg%2F11h2fqf3dg?entry=ttu" target="_blank">Seven Hills Function Hall, Markapur</Button>
										
											
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
												className='wedding-image img-fluid'
												
											></Image>{' '}
											</a>
										</span>
										<strong className='pre-header'>"A Kaleidoscope of Joy: Celebrating Our Kalyanam!!"</strong>
										<span className='event-message'>Come, join us as we embark on a joyous journey - a celebration of love, tradition, and the beautiful union of two souls!. Our Kalyanam, steeped in rich customs and vibrant colors, promises to be a spectacle for the senses. Immerse yourself in the melodious chanting of mantras, the rhythmic beats of dhol and shehnai, and the tantalizing aroma of spices wafting from elaborate feasts.
										Witness the blossoming of a new chapter in the lives of <b>Nikhil</b> and <b>Prathyusha</b></span>
										<div className='event-date'>
										<span>
											<strong>Su Muhurtham : </strong>
											<strong>March 02nd, 2024 - Morning 11:21 AM IST</strong>
										</span>
										
										
										<span>
											<strong>Location : </strong>
											<Button variant="link" className='location' href="https://www.google.com/maps/place/Srinivasa+Kalyana+Mandapam/@15.7399887,79.2520315,17z/data=!3m1!4b1!4m6!3m5!1s0x3bb53143820b2683:0x78c004da4b0170f1!8m2!3d15.7399887!4d79.2546064!16s%2Fg%2F11tn6y20vr?entry=ttu" target="_blank">Srinivasa Kalyana Mandapam, Markapur</Button>
											 
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
