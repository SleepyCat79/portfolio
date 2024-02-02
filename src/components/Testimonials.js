import Slider from "react-slick";
import { sliderProps } from "../sliderProps";
const Testimonials = () => {
  return (
    <div className="testimonial-section m-30px-t sm-m-20px-t pb-5">
      <div className="sub-title m-30px-b">
        <h2 className="dark-color theme-after">Award</h2>
      </div>
      <Slider {...sliderProps.testimonial} id="client-slider-single">
        <div className="testimonial-col">
          <div className="say">
            <p></p>
          </div>
          <div className="user">
            <div className="img">
              <img src="static/img/avtar1.jpg" alt title />
            </div>
            <div className="name ml-2">
              <span>OISP PRESENTATION CONTEST 2022 - TOP 20 THE BEST</span>
              <label>Educational</label>
            </div>
          </div>
        </div>
        <div className="testimonial-col">
          <div className="say">
            <p></p>
          </div>
          <div className="user">
            <div className="img">
              <img src="static/img/avtar1.jpg" alt title />
            </div>
            <div className="name ml-2">
              <span>
                OISP PRESENTATION CONTEST 2022 - 2ND RANK IN POPULARITY PROJECT
              </span>
              <label>CEO</label>
            </div>
          </div>
        </div>
      </Slider>{" "}
    </div>
  );
};
export default Testimonials;
