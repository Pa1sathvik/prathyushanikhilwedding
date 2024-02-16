import React from 'react';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';

const MyTitleMessage = styled.h1`
	position: absolute;
	width: 100%;
	top: 22rem;
	z-index: 1;
	margin-top: 105px;
	text-align: center;

	strong {
		font-size: 1.25em;
	}
	div {
		color: white;
		font-family: 'Yellowtail', serif, system-ui;

		text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
		
		margin-top:10px;
		

		.main {
			font-size: 40px;
		}

		.invite-message{
			font-size: 30px;
		}

		.sub {
			font-size: 27px;
			letter-spacing: 2px;
		}
	}
`;

const TitleMessage = () => (
	<MyTitleMessage>
		<div className="titleMessage">
			<div className="heading">
				<div className="main text-center mb-3">
				<strong>Nikhil & Prathyusha's wedding</strong>
					<br />
					
				</div>
				<span className='invite-message'>
						We invite you to share our celebration of lifelong love and commitment as we exchange vows on..
					</span>
				<div className="sub">
					<Typewriter
						options={{
							strings: ['Save The Date ', '02nd March, 2024 | 11:21 AM'],
							autoStart: true,
							loop: true,
							delay: 50,
						}}
					/>
				</div>
			</div>
		</div>
	</MyTitleMessage>
);

export default TitleMessage;
