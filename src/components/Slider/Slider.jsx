import "swiper/css";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "./Slider.scss";
import SliderNavigation from "./components/SliderNavigation/SliderNavigation";

const Slider = (props) => {
  const { children, navigationTargetElementId = null } = props;

  return (
    <div className="slider">
      <SwiperComponent className="slider__swiper">
        {children.map((slide, index) => (
          <SwiperSlide className="slider__item" key={index}>
            {slide}
          </SwiperSlide>
        ))}
      </SwiperComponent>

      {!navigationTargetElementId && (
        <SliderNavigation className="slider__navigation" />
      )}
    </div>
  );
};

export default Slider;
