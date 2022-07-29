import oneImg from '../img/furniture/09.jpg';
import twoImg from '../img/furniture/01.jpg';
import threeImg from '../img/furniture/02.jpg';
import fourImg from '../img/furniture/04.jpg';
import fiveImg from '../img/furniture/06.jpg';
import sixImg from '../img/furniture/07.jpg';
import sevenImg from '../img/furniture/03.jpg';
import eightImg from '../img/furniture/04.jpg';
import nineImg from '../img/furniture/05.jpg';
import tenImg from '../img/furniture/01.jpg';
import elevenImg from '../img/furniture/08.jpg';
import tvelweImg from '../img/furniture/09.jpg';
import thirteenImg from '../img/furniture/06.jpg';

function Furniture() {
   return (
      <section className="page__furniture furniture">
         <div className="furniture__container">
            <div className="furniture__label">Share your setup with</div>
            <h2 className="furniture__title _title">#FuniroFurniture</h2>
            <div data-speed="0.01" className="furniture__body">
               <div className="furniture__items _gallery">
                  <div className="furniture__column">
                     <div className="furniture__row row-furniture row-furniture_left-top">
                        <a href="img/furniture/09.jpg" className="row-furniture__item"><img src={oneImg} alt="Image" /></a>
                        <a href="img/furniture/01.jpg" className="row-furniture__item"><img src={twoImg} alt="Image" /></a>
                        <a href="img/furniture/02.jpg" className="row-furniture__item"><img src={threeImg} alt="Image" /></a>
                     </div>
                     <div className="furniture__row row-furniture row-furniture_left-bottom">
                        <a href="img/furniture/04.jpg" className="row-furniture__item"><img src={fourImg} alt="Image" /></a>
                        <a href="img/furniture/06.jpg" className="row-furniture__item"><img src={fiveImg} alt="Image" /></a>
                        <a href="img/furniture/07.jpg" className="row-furniture__item"><img src={sixImg} alt="Image" /></a>
                     </div>
                  </div>
                  <div className="furniture__column">
                     <div className="furniture__row row-furniture row-furniture_center">
                        <a href="img/furniture/03.jpg" className="row-furniture__item"><img src={sevenImg} alt="Image" /></a>
                     </div>
                  </div>
                  <div className="furniture__column">
                     <div className="furniture__row row-furniture row-furniture_right-top">
                        <a href="img/furniture/04.jpg" className="row-furniture__item"><img src={eightImg} alt="Image" /></a>
                        <a href="img/furniture/05.jpg" className="row-furniture__item"><img src={nineImg} alt="Image" /></a>
                        <a href="img/furniture/01.jpg" className="row-furniture__item"><img src={tenImg} alt="Image" /></a>
                     </div>
                     <div className="furniture__row row-furniture row-furniture_right-bottom">
                        <a href="img/furniture/08.jpg" className="row-furniture__item"><img src={elevenImg} alt="Image" /></a>
                        <a href="img/furniture/09.jpg" className="row-furniture__item"><img src={tvelweImg} alt="Image" /></a>
                        <a href="img/furniture/06.jpg" className="row-furniture__item"><img src={thirteenImg} alt="Image" /></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
export default Furniture;