import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide2 from "../../assets/img/carousal/Slide1-modified-compressed.webp";
import Slide1 from "../../assets/img/carousal/slide2.webp";
import Slide4 from "../../assets/img/carousal/slide_4.webp";
import Slide5 from "../../assets/img/carousal/slide_6.webp";
import Slide6 from "../../assets/img/carousal/slide6.webp";
import Slide3 from "../../assets/img/carousal/Slide9.webp";
import Slide8 from "../../assets/img/carousal/slide_8.webp";

import ScrollDown from "../scroll-down/scroll-down.component";
import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide1} alt="First slide" />
          
        </Carousel.Item>
       
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide2} alt="Third slide" />
         
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide" />
         
        </Carousel.Item>
         <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide4} alt="Third slide" />
         
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide5} alt="Third slide" />
         
        </Carousel.Item>
       
       {/**
        *  <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide6} alt="Third slide" />
         
        </Carousel.Item>
       
      
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide8} alt="Third slide" />
         
        </Carousel.Item>
       
        */}
       
      
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousal;
