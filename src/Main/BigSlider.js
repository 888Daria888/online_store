import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../img/main-slider/01.jpg'
import image2 from '../img/main-slider/02.jpg'
import image3 from '../img/main-slider/03.jpg'
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination} from 'swiper';
SwiperCore.use([Navigation, Pagination])



const  BigSlider = () => {
   let images = [image1, image2, image3]
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
   return(
      <section className="page__main-slider main-slider">
         <div className="main-slider__container _container">
            <div className="main-slider__body">
               <div className="main-slider__content content-main">
                  <h1 className="content-main__title">High-Quality Furniture Just For You</h1>
                  <div className="content-main__text">
                     Our furniture is made from selected and best quality materials that
                     are suitable for your dream home
                  </div>
                  <a href="" data-da=".main-slider__body,991.98" className="content-main__button btn">Shop Now</a>
               </div>
               <Swiper
         id="main"
         tag="section"
         wrapperTag="ul"
         navigation
         observer= {true}
         observeParents= {true}
         slidesPerView= {1}
         spaceBetween= {32}
         watchOverflow= {true}
         speed= {800}
         loop= {true}
         loopAdditionalSlides= {5}
         preloadImages= {false}
         parallax= {true}
         onInit={(swiper) => console.log('Swiper initialized!', swiper)}
         onSlideChange={(swiper) => {
            console.log('Slide index changed to: ', swiper.activeIndex);
         }}
         onReachEnd={() => console.log('Swiper end reached')}
      >
         {slides}
      </Swiper>
            </div>
         </div>
      </section>
   )
}
export default BigSlider;