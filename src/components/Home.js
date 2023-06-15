import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <div className="home">
    <Carousel autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false} showIndicators={false}>
      <div className="crouseldiv">
        <img src="https://images.thedirect.com/media/article_full/tony-stark-snap.jpg" />
      </div>
      <div className="crouseldiv">
        <img src="https://nofilmschool.com/sites/default/files/styles/facebook/public/avengers_endgame_script_download.jpg?itok=vlbLj73X" />
      </div>
      <div className="crouseldiv">
        <img src="https://cdn.colombia.com/sdi/2022/01/12/spider-man-no-way-home-version-digital-fecha-de-lanzamiento-sony-marvel-studios-986933.jpg" />
      </div>
    </Carousel>

     <Carousel autoPlay={true} infiniteLoop={false} interval={3000} showThumbs={false} showIndicators={false}>
      <div className="listofmovies">
     <div>
       <img src="https://images.thedirect.com/media/article_full/tony-stark-snap.jpg" />
     </div>
     <div>
       <img src="https://images.thedirect.com/media/article_full/tony-stark-snap.jpg" />
     </div>
     <div>
       <img src="https://images.thedirect.com/media/article_full/tony-stark-snap.jpg" />
     </div>
     <div>
       <img src="https://images.thedirect.com/media/article_full/tony-stark-snap.jpg" />
     </div>
     <div>
       <img src="https://images.thedirect.com/media/article_full/tony-stark-snap.jpg" />
     </div>
     </div>
     <div className="listofmovies">
     <div>
       <img src="https://images.thedirect.com/media/article_full/tony-stark-snap.jpg" />
     </div>
     <div>
       <img src="https://images.thedirect.com/media/article_full/tony-stark-snap.jpg" />
     </div>
     <div>
       <img src="https://images.thedirect.com/media/article_full/tony-stark-snap.jpg" />
     </div>
     <div>
       <img src="https://images.thedirect.com/media/article_full/tony-stark-snap.jpg" />
     </div>
     <div>
       <img src="https://images.thedirect.com/media/article_full/tony-stark-snap.jpg" />
     </div>
     </div>
     </Carousel>
     </div>
  );
};
export default Home;
