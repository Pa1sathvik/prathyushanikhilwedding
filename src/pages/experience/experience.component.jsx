import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import L_YODLEE from '../../assets/img/experience/yodlee.svg';
import L_INFORMATICA from '../../assets/img/experience/informatica.png';
import L_PAYPAL from '../../assets/img/experience/Paypal.png'
import Tilt from 'react-tilt';
import './experience.styles.css';

const Experience = () => {
	return (
		<div id="experience">
			<h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
			<Jumbotron className="jumbo-style">
				<Container>
					<Tilt options={{ max: 1 }}>
						<Card>
							<Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
								<Card.Img variant="top" className="img-resize" src={L_YODLEE} alt="Yodlee logo" />
							</Card.Header>
							<Card.Body className="d-flex justify-content-center flex-column">
								<div>
									<Card.Title className="text-center">Associate Software Engineer</Card.Title>
								</div>
								<div>
									<Card.Text className="text-center style">
										<strong className="body-title-style ">Java Developer</strong>
										<br />
										<strong>Technology:</strong> Java, JavaScript, SQL, Selenium.
										<br />
										<strong>Duration:</strong> September 2015 - August 2016
										<br />
										<strong> Project Description </strong>
										<ul className="text-left">
											<li>
												<strong>Developed &amp; enhanced</strong> multiple features with
												customizability option across Yodlee web scraping agent applications in
												Yodlee PFM Product.
											</li>
											<li>
												<strong>Developed</strong> automation system to create SQL bulk query
												scripts that increased efficiency by 80% and decreased working hours
												from 4 hours to 30 mins per task when generating reports.
											</li>
											<li>
												<strong>Provided</strong> application maintenance while working as
												`Production Support`.
											</li>
											<li>
												<strong>Performed</strong> CRUD operations on multiple databases to
												load/ remove data according to the business requirements.
											</li>
											{/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
										</ul>
									</Card.Text>
								</div>
							</Card.Body>
						</Card>

						<Card>
							<Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
								<Card.Img variant="top" className="img-resize" src={L_YODLEE} alt="Yodlee logo" />
							</Card.Header>
							<Card.Body className="d-flex justify-content-center flex-column">
								<div>
									<Card.Title className="text-center">Software Engineer</Card.Title>
								</div>
								<div>
									<Card.Text className="text-center style">
										<strong className="body-title-style ">Full Stack Developer</strong>
										<br />
										<strong>Technology:</strong> React JS, Java, JavaScript, SQL , Oracle Database,
										Spring Boot, Junit, SonarQube.
										<br />
										<strong>Duration:</strong> August 2016 - January 2019
										<br />
										<strong> Project Description </strong>
										<ul className="text-left">
											<li>
												<strong>Designed &amp; developed </strong> Juggernaut Web application
												UI, backend.
											</li>
											<li>
												<strong>Juggernaut</strong> is an internal microservice based web
												application for Auto Resolving issues raised on our platform. Main
												member of the tool development and design.
											</li>
											<li>
												<strong>Developed</strong> Rest controller, Authentication, Spring
												actuator, Services architecture of the tool.
											</li>
											<li>
												<strong>Designed</strong> REST API's , architecure for asynchronous task
												execution , database schemas.
											</li>
											<li>
												<strong>Designated</strong> Scrum master for the project. Planned ,
												designed sprints as part of project agile model.
											</li>
											<li>
												<strong>Integrated</strong> SonarQube with application for review of
												code flaws, code debt, identification of code smells.
											</li>
											{/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
										</ul>
									</Card.Text>
								</div>
							</Card.Body>
						</Card>
						<Card>
							<Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
								<Card.Img variant="top" className="img-resize" src={L_YODLEE} alt="Yodlee logo" />
							</Card.Header>
							<Card.Body className="d-flex justify-content-center flex-column">
								<div>
									<Card.Title className="text-center">Senior Software Engineer</Card.Title>
								</div>
								<div>
									<Card.Text className="text-center style">
										<strong className="body-title-style ">Full Stack Developer</strong>
										<br />
										<strong>Technology:</strong> React JS, Java, JavaScript, SQL , Oracle Database,
										Eureka, Hystrix Spring Boot, Junit, Mockito, Micrometer, Prometheus, Grafana,
										Linux OS, Docker, Hystrix, Eureka.
										<br />
										<strong>Duration:</strong> January 2019 - March 2020
										<br />
										<strong> Project Description </strong>
										<ul className="text-left">
											<li>
												<strong>Designed &amp; developed </strong> Juggernaut Web application
												UI, backend.
											</li>
											<li>
												<strong>Juggernaut</strong> is an internal microservice based web
												application for Auto Resolving issues raised on our platform. Main
												member of the tool development and design.
											</li>
											<li>
												<strong>Developed</strong> monitoring service for the application using
												spring boot actuator, Micrometer. Integrated with Prometheus , Grafana
												for live monitoring of the events in web application.
											</li>
											<li>
												<strong>Designed</strong> Junit unit testing schema, Integration testing
												model for the application.
											</li>
											<li>
												<strong>Created &amp; integrated</strong> integration test cases with
												database in docker with replicated database model for testing.
											</li>

											<li>
												<strong>Integrated &amp; designed</strong> Eureka service for micro
												service architecture , Zuul for REST gateway , Netflix hystrix for
												circuit breaker pattern in case of service failures.
											</li>

											<li>
												Taken care of deployments, Thread dumps analysis , Heap dumps analysis
												for application performance checks.
											</li>
										</ul>
									</Card.Text>
								</div>
							</Card.Body>
						</Card>

						<Card>
							<Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
								<Card.Img
									variant="top"
									className="img-resize"
									src={L_INFORMATICA}
									alt="Informatica logo"
								/>
							</Card.Header>
							<Card.Body className="d-flex justify-content-center flex-column">
								<div>
									<Card.Title className="text-center">Senior Software Engineer</Card.Title>
								</div>
								<div>
									<Card.Text className="text-center style">
										<strong className="body-title-style ">Full Stack Developer</strong>
										<br />
										<strong>Technology:</strong> React JS, Redux, Java, JavaScript, SQL , Oracle Database,
										Spring Boot, Kafka, AWS S3, H2 Database.
										<br />
										<strong>Duration:</strong> March 2020 - March 2022
										<br />
										<strong> Project Description </strong>
										<ul className="text-left">
											<li>
												<strong>Developed &amp; Designed</strong> Securestats internal
												microservice based web application used for Security flaws management,
												JIRA issue creation , report generation as part of R&D shared services
												for Security Dept.
											</li>
											<li>
												<strong>Designed</strong> architecture , database schema for the
												application.
											</li>
											<li>
												<strong>Developed</strong> Securestats application UI, backend using
												Spring boot , React ES2015 , JavaScript.
											</li>
											<li>
												<strong>Co-Developed &amp; Co-Designed </strong> FlawManagement Service,
												Notification Service as part of Securestats Application.
											</li>
											{/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
										</ul>
									</Card.Text>
								</div>
							</Card.Body>
							
						</Card>
						<Card>
						<Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
								<Card.Img
									variant="top"
									className="img-resize"
									src={L_PAYPAL}
									alt="Paypal logo"
								/>
							</Card.Header>
						<Card.Body className="d-flex justify-content-center flex-column">
								<div>
									<Card.Title className="text-center">Software Development Engineer 3</Card.Title>
								</div>
								<div>
									<Card.Text className="text-center style">
										<strong className="body-title-style ">Full Stack Developer</strong>
										<br />
										<strong>Technology:</strong> React JS, Redux, Java, JavaScript, SQL , Oracle Database,
										Spring Boot, Jest, Junit, GraphQl, Kafka, Docker.
										<br />
										<strong>Duration:</strong> April 2022 - Present
										<br />
										<strong> Project Description </strong>
										<ul className="text-left">
											<li>
												<strong>Developed &amp; Designed</strong> Part of Server Driven Framework(<strong><a
												href='https://www.linkedin.com/posts/paypal_are-you-using-3x-more-time-to-build-your-activity-6904798807872413696-yp_v?utm_source=share&utm_medium=member_desktop'
												target="_blank"
												rel="noopener noreferrer"
											>SPF</a></strong>) which is Paypal's
												Server driven UI(SDUI).
											</li>
											<li>
											<strong><a
												href='https://www.linkedin.com/posts/paypal_are-you-using-3x-more-time-to-build-your-activity-6904798807872413696-yp_v?utm_source=share&utm_medium=member_desktop'
												target="_blank"
												rel="noopener noreferrer"
											>SPF</a></strong> is an in-house PayPal framework that leverages the principle of Server-Driven UI. It allows app and web teams to create experiences for iOS, Android, and web platforms through a single JSON file that resides on the server.</li>
											<li>
												<strong>Leads</strong> the Backend application team and handles Frontend Admin UI development, design, testing, and SPF Web SDK development.
											</li>
											<li>
											 Optimized application performance using CPU and memory profiling.
											</li>
											
											<li>
												<strong>Designed</strong> and <strong>developed</strong> version management, versioning, and Page Inheritance features for full-stack development in SPF.
											</li>
											<li>
											Part of the Scrum master's group and an active member for requirement gathering, design discussion, architectural decision record's design grooming, and development of the stories.
											</li>
										</ul>
									</Card.Text>
								</div>
							</Card.Body>
						</Card>
					</Tilt>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default Experience;
