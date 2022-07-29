
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../img/tips/01.jpg';
import image2 from '../img/tips/02.jpg';
import image3 from '../img/tips/03.jpg';


function Tips() {
   let images = [image1, image2, image3];
   const slides = [];
   for (let i = 0; i < 3; i += 1) {
      slides.push(
         <SwiperSlide key={`slide-${i}`} tag='li'>
            <img
               src={images[i]}
               alt={`Slide ${i}`}
               style={{ listStyle: 'none' }}
            />
            <div class="slider-tips__content">
               <a href="" class="slider-tips__title">How to create a living room to love</a>
               <div class="slider-tips__text">20 jan 2020</div>
            </div>
         </SwiperSlide>
      )
   }
   return (
      <section className="page__tips tips">
         <div className="tips__container _container">
            <h2 className="tips__title _title">Tips & Tricks</h2>
            <Swiper
               id="tips"
               tag="section"
               wrapperTag="ul"
               speed={800}
               loop={true}
               watchOverflow={true}
               navigation
               spaceBetween={60}
               slidesPerView={3}
               onInit={(swiper) => console.log('Swiper initialized!', swiper)}
               onSlideChange={(swiper) => {
                  console.log('Slide index changed to: ', swiper.activeIndex);
               }}
               onReachEnd={() => console.log('Swiper end reached')}
            >
               {slides}
            </Swiper>
         </div>
      </section>
   )
}
export default Tips;