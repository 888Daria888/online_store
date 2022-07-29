import firstSvg from '../img/advantages/01.svg';
import secondSvg from '../img/advantages/02.svg';
import thirdSvg from '../img/advantages/03.svg';
import fourthSvg from '../img/advantages/04.svg';

function Advantages() {
   return(
      <section className="page__advantages advantages">
            <div className="advantages__container _container">
               <div className="advantages__item">
                  <div className="advantages__icon">
                     <img src={firstSvg} alt="High Quality"/>
                  </div>
                  <h3 className="advantages__title">High Quality</h3>
                  <div className="advantages__text">crafted from top materials</div>
               </div>
               <div className="advantages__item">
                  <div className="advantages__icon">
                     <img src={secondSvg} alt="Warrany Protection"/>
                  </div>
                  <h3 className="advantages__title">Warrany Protection</h3>
                  <div className="advantages__text">Over 2 years</div>
               </div>
               <div className="advantages__item">
                  <div className="advantages__icon">
                     <img src={thirdSvg} alt="Free Shipping"/>
                  </div>
                  <h3 className="advantages__title">Free Shipping</h3>
                  <div className="advantages__text">Order over 150 $</div>
               </div>
               <div className="advantages__item">
                  <div className="advantages__icon">
                     <img src={fourthSvg}  alt="24 / 7 Support"/>
                  </div>
                  <h3 className="advantages__title">24 / 7 Support</h3>
                  <div className="advantages__text">Dedicated support</div>
               </div>
            </div>
         </section>
   )
}
export default Advantages;