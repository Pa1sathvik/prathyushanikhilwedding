import React from 'react'
import Typewriter from 'typewriter-effect';

import './about.styles.css';
function IntroDesc() {

  return (
    <div className="titleMessage">
    <div className="heading">
        <div className="main text-center mb-3">
        <strong>Nikhil & Prathyusha's wedding</strong>
            <br />
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
  )
}

export default IntroDesc