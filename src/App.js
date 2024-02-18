import React from 'react';
import MyNavbar from './components/my-navbar/my-navbar.component';
import MyCarousal from './components/my-carousal/my-carousal.component';
import MyTitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';
import Skills from './pages/skills/skills.component';
import Groom from './pages/skills/Groom.jsx';
import Container from 'react-bootstrap/Container';
import IntroDesc from './pages/about/IntroDesc';
//import TimeLine from './components/projects-timeline/projects-timeline.component';
import Experience from './pages/experience/experience.component';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Routes,
	Link
  } from "react-router-dom";
  
  
import ContactForm from './pages/contact-form/contact-form.component';
import { Parallax } from 'react-parallax';
// import Particles from "react-particles-js";
// import { particlesOptions } from "./particlesOptions";
import FooterPanel from './components/footer/footer.component';

import './App.css';


const App = () => {
	return (
		
		<Routes>
		
			<Route path="/bride" element={<div className="App" style={{ position: 'relative' }}>
			<MyCarousal />
			
			<MyNavbar />

			<div>
				
				<div>
					<Container className="container-box rounded">
						<Fade duration={500}>
							<IntroDesc />
							
						</Fade>
					</Container>
				</div>
			
		</div>
			<div>
				
					<div>
						<Container className="container-box rounded">
							<Fade duration={500}>
								<About />
								
							</Fade>
						</Container>
					</div>
				
			</div>
			<div>
			<Container className="container-box rounded">
				
					
					<Skills />
				
			</Container>
			</div>
			

			<Container className="container-box rounded">
				<Fade duration={500}>
					<hr />
					<ContactForm />
				</Fade>
			</Container>

			<hr />
			<FooterPanel />
		</div>}>
			
			</Route>
			<Route path="/groom" element={<div className="App" style={{ position: 'relative' }}>
			<MyCarousal />
			
			<MyNavbar />

			<div>
				
					<div>
						<Container className="container-box rounded">
							<Fade duration={500}>
								<About />
								
							</Fade>
						</Container>
					</div>
				
			</div>
			<div>
			<Container className="container-box rounded">
				
					
					<Groom />
				
			</Container>
			</div>
			

			<Container className="container-box rounded">
				<Fade duration={500}>
					<hr />
					<ContactForm />
				</Fade>
			</Container>

			<hr />
			<FooterPanel />
		</div>}>
			
			</Route>
		
		</Routes>
		
		
	);
};

export default App;
