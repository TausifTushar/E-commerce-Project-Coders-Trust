import image from '../../assets/Image/cityscape-with-seagulls-black-white-photo-with-film-grain-effect.jpg'
import image1 from '../../assets/Image/1.jpg'
import image2 from '../../assets/Image/free-photo-ramadan-kareem-eid-mubarak-royal-elegant-lamp-with-mosque-holy-gate-with-fireworks (1).jpg'
import image3 from '../../assets/Image/free-photo-ramadan-kareem-eid-mubarak-royal-elegant-lamp-with-mosque-holy-gate-with-fireworks.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Carousel = () => {
  return (
    <div className='h-[80vh]'>
      {/* <div className="carousel w-full h-[90vh]">
        <div id="slide1" className="carousel-item relative w-full h-[90vh]">
          <img src={image} className="w-full " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={image1}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={image2}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={image3}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div> */}
      <Swiper
       modules={[Navigation, Pagination,Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      Autoplay
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide >
        <img src={image} alt="" />
      </SwiperSlide>
      <SwiperSlide>
       <img src={image1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} alt="" />
      </SwiperSlide>
      ...
    </Swiper>
    </div>
  );
};

export default Carousel;
