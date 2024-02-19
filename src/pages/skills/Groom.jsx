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

const Groom = () => {
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
								<Card.Title className="text-center  card-title">HALDI</Card.Title>
								<hr />
								<Card.Text className="card-text d-flex justify-content-start flex-column">
									{skills.groomHaldi.map((skill, index) => (
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
												className='groomhaldi-image img-fluid'
												
											></Image>{' '}
											</a>
										</span>
										<strong className='pre-header'>"HALDI Kissed !!"</strong>
										<span className='event-message'>Haldi  is a pre-wedding ceremony performed a day or two before the wedding. Family members and friends playfully slather the groom in a paste of turmeric, oil, and milk to prevent evil spirits from harming the to-be-wed couple.</span>
										<div className='event-date'>
										<span>
											<strong>Event Date : </strong>
											February 29th, 2024 - Morning 7 AM IST
										</span>
										<br/>
										<span>
											<strong>Location : </strong>
											<Button variant="link" className='location' href="https://www.google.com/maps/place/14%C2%B054'13.2%22N+78%C2%B000'40.1%22E/@14.9037652,78.0108261,20z/data=!4m5!3m4!4b1!8m2!3d14.903679!4d78.011148?entry=ttu" target="_blank">Groom's Home - Sapthagiri Nilayam, Tadipatri</Button>
										
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
								<Card.Title className="text-center  card-title">GROOM MAKING CEREMONY</Card.Title>
								<hr />
								<Card.Text className="card-text d-flex justify-content-start flex-column">
									{skills.groom.map((skill, index) => (
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
												className='groommaking-image img-fluid'
												
											></Image>{' '}
											</a>
										</span>
										<strong className='pre-header'>"A Celebration of Anticipation: Witness the Groom Making Ceremony !!"</strong>
										<span className='event-message'>A ceremony of the groom's preparation precedes the wedding. Witness the beautiful tradition of the groom making ceremony 
										before the main event. Get ready for the giggles and happy tears! Join us for the groom's getting-ready party.</span>
										<div className='event-date'>
										<span>
											<strong>Event Date : </strong>
											February 29th, 2024 - Morning 11 AM IST
										</span>
										<br/>
										<span>
											<strong>Location : </strong>
											<Button variant="link" className='location' href="https://www.google.com/maps/place/14%C2%B054'13.2%22N+78%C2%B000'40.1%22E/@14.9037652,78.0108261,20z/data=!4m5!3m4!4b1!8m2!3d14.903679!4d78.011148?entry=ttu" target="_blank">Groom's Home - Sapthagiri Nilayam, Tadipatri</Button>
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
									{skills.groomMehendi.map((skill, index) => (
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
												className='groommehendi-image img-fluid'
												
											></Image>{' '}
											</a>
										</span>
										<strong className='pre-header'>"Mehendi vibes on fleek!"</strong>
										<span className='event-message'>The green mehendi paste is applied to the hands and feet, which house the nerve endings in the body, to help calm the Groom's nerves.</span>
										<div className='event-date'>
											
										<span>
											<strong>Event Date : </strong>
											February 29th, 2024 - Evening 6 PM IST
										</span>
										<br/>
										<span>
											<strong>Location : </strong>
											<Button variant="link" className='location' href="https://www.google.com/maps/place/14%C2%B054'13.2%22N+78%C2%B000'40.1%22E/@14.9037652,78.0108261,20z/data=!4m5!3m4!4b1!8m2!3d14.903679!4d78.011148?entry=ttu" target="_blank">Groom's Home - Sapthagiri Nilayam, Tadipatri</Button>
										
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
								<Card.Title className="text-center  card-title">SANGEET</Card.Title>
								<hr />
								<Card.Text className="card-text d-flex justify-content-start flex-column">
									{skills.groomSangeet.map((skill, index) => (
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
												className='groomsangeet-image'
												
											></Image>{' '}
											</a>
										</span>
										<strong className='pre-header'>"Dhol Beats & Dancing Feet: The Groom's Sangeet Rings with Joy!"</strong>
										<span className='event-message'>As the night culminates in a crescendo of laughter and shared joy, the Sangeet leaves an indelible mark on everyone's hearts. It's a reminder of the love, laughter, and unity that bring families together, paving the way for a beautiful wedding celebration filled with promise and cherished memories!!</span>
										<div className='event-date'>
										<span>
											<strong>Event Date : </strong>
											February 29th, 2024 - Evening 7 PM IST.
										</span>
										<br/>
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
										<strong className='pre-header'>"A Royal Welcome Awaits: Celebrating the Arrival of the Groom!!"</strong>
										<span className='event-message'>The anticipation thrumming through the air is as vibrant as the decorations! Today,  celebrating the arrival of the groom.  From joyous music and welcoming embraces to heartfelt blessings and playful banter, this day is about creating memories that will forever bind us together.</span>
										<div className='event-date'>
										<span>
											<strong>Event Date : </strong>
											March 1st, 2024 - Noon 2 PM IST
										</span>
										<br/>
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
								<Card.Title className="text-center  card-title">RECEPTION AT BRIDE'S PLACE</Card.Title>
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
										<strong className='pre-header'>"Love, Laughter, and the Dance Floor Awaits: Celebrate Our Reception prior to the Wedding"</strong>
										<span className='event-message'>Buckle up for good vibes and good times! Get ready to celebrate our love with delicious eats, flowing drinks, and an epic dance party that'll keep you moving all night long. Let's make some memories that will last a lifetime!!</span>
										<div className='event-date'>
										<span>
											<strong>Event Date : </strong>
											March 1st, 2024 - Evening 7 PM IST.
										</span>
										<br/>
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
											March 02nd, 2024 - Morning 11:21 AM IST
										</span>
										<br/>
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
                    <Col md={12}>
						<Card className="focus mt-2 mb-2">
							<Card.Body>
								{/* Frontend */}
								<Card.Title className="text-center  card-title">RECEPTION AT GROOM'S PLACE</Card.Title>
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
										<strong className='pre-header'>"Love Blooms at Home: Backyard Bash for the Newlyweds"</strong>
										<span className='event-message'>Dust off your dancing shoes and grab a slice of cake! The lovebirds are soaring, and the backyard's the party zone! Join us for a laid-back, laughter-filled bash as <b>Nikhil && Prathyusha</b> celebrate their happily ever after with good vibes, delicious eats, and endless fun. Let's paint the town red with love, music, and memories that will last a lifetime.</span>
										<div className='event-date'>
										<span>
											<strong>Event Date : </strong>
											March 6th, 2024 - Evening 7 PM IST.
										</span>
										<br/>
										<span>
											<strong>Location : </strong>
											<Button variant="link" className='location' href="https://www.google.com/maps/place/ANR+GARDENS/@14.8911938,77.9978073,17z/data=!3m1!4b1!4m6!3m5!1s0x3bb40354e43b29e5:0x791f7b656103b691!8m2!3d14.8911938!4d78.0003822!16s%2Fg%2F11rk892xbq?entry=ttu" target="_blank">ANR Gardens, Tadipatri </Button>
										
											
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
								<Card.Title className="text-center  card-title">SATYANARAYANA SWAMY VRATHAM</Card.Title>
								<hr />
								<Card.Text className="card-text d-flex justify-content-start flex-column">
									{skills.satyanarayanaswamy.map((skill, index) => (
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
												className='satya-image'
												
											></Image>{' '}
											</a>
										</span>
										<strong className='pre-header'>"Prayers for Prosperity & Peace: Witnessing the Sacred Satya Narayana Swamy Vratham"</strong>
										<span className='event-message'>Embark on a journey of devotion, seeking harmony and blessings with the sacred Satya Narayana Swamy Vratham. This time-honored ritual resonates with the desire for truth, righteousness, and a life filled with abundance. Join us as we chant ancient mantras, offer heartfelt prayers, and partake in this meaningful ceremony.</span>
										<div className='event-date'>
										<span>
											<strong>Event Date : </strong>
											<strong>March 7th, 2024 - Noon 10 AM IST.</strong>
										</span>
										<br/>
										<span>
											<strong>Location : </strong>
											<Button variant="link" className='location' href="https://www.google.com/maps/place/14%C2%B054'13.2%22N+78%C2%B000'40.1%22E/@14.9037652,78.0108261,20z/data=!4m5!3m4!4b1!8m2!3d14.903679!4d78.011148?entry=ttu" target="_blank">Groom's Home - Sapthagiri Nilayam, Tadipatri</Button>
											
											
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

export default Groom;
