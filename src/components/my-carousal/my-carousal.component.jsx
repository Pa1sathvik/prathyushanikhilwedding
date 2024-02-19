import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/carousal/Slide1-modified.jpeg";
import Slide2 from "../../assets/img/carousal/slide2.webp";
import Slide4 from "../../assets/img/skills/slide_4.jpeg";
import Slide6 from "../../assets/img/skills/slide_6.jpeg";
import Slide7 from "../../assets/img/skills/slide_7.jpeg";
import Slide8 from "../../assets/img/skills/slide_8.jpeg";

import ScrollDown from "../scroll-down/scroll-down.component";
import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide2} alt="First slide" />
          
        </Carousel.Item>
       
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide1} alt="Third slide" />
         
        </Carousel.Item>

        {/**  <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide4} alt="Third slide" />
         
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide6} alt="Third slide" />
         
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide7} alt="Third slide" />
         
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide8} alt="Third slide" />
         
        </Carousel.Item>*/}
       
      
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousal;
