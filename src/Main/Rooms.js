
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../img/rooms/01.jpg'
import image2 from '../img/rooms/02.jpg'
import image3 from '../img/rooms/03.jpg'
import 'swiper/swiper-bundle.css';

function Rooms() {
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
         </SwiperSlide>
      )
   }
   return (
      <section className="page__rooms rooms">
         <div className="rooms__container _container">
            <div className="rooms__body">
               <h2 className="rooms__title _title">50+ Beautiful rooms inspiration</h2>
               <div className="rooms__text">Our designer already made a lot of beautiful prototipe of rooms that inspire you</div>
               <a href="" className="rooms__button btn">Explore More</a>
            </div>
            <Swiper
               id="rooms"
               tag="section"
               wrapperTag="ul"
               speed={800}
               loop={true}
               watchOverflow={true}
               navigation
               spaceBetween={0}
               slidesPerView={1}
               breakpoints={{
                  1253: {
                    slidesPerView: 2,
                    spaceBetween: 60,
                  
                  }
                }}
               onInit={(swiper) => console.log('Swiper initialized!', swiper)}
               onSlideChange={(swiper) => {
                  console.log('Slide index changed to: ', swiper.activeIndex);
               }}
               onReachEnd={() => console.log('Swiper end reached')}
            >
               {slides}
            </Swiper>
         </div>
      </section >
   )
}
export default Rooms;