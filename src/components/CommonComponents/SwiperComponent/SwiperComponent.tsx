import React from 'react';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import './Swiper.css';

interface CustomSwiperProps extends SwiperProps {
  slides: React.ReactNode[];
  className?: string;
  setActiveIndex?: (value: number) => void;
}

export const SwiperComponent: React.FC<CustomSwiperProps> = ({
  slides,
  className = '',
  setActiveIndex = ()=> {},
  ...props
}) => {
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className={`swiper-container ${className}`}>
      <Swiper
        {...props}
        modules={[Pagination]}
        onSlideChange={handleSlideChange}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index}>{slideContent}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
