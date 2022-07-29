import { useState} from 'react';

function Footer() {
   const [inputText, setInputText] = useState('');
   const [popup, setPopup] = useState('popup popup_subscribe-message');
   const [isDisplay, setIsDisplay] = useState('none');

   const enterEmail = (e) => {
      setInputText(e.target.value)
   }
   const onClickButton = () => {
      if(!inputText.includes('@')){
         setIsDisplay('block')
         return
      }
      setPopup('popup popup_subscribe-message _active')
   }
   const onClickClose = () =>{
      setPopup('popup popup_subscribe-message')
   }

   return (
      <footer className="footer">
         <div className="footer__container _container">
            <div className="footer__body">
               <div className="footer__main">
                  <a href="" className="footer__logo _footer-title">Funiro.</a>
                  <div className="footer__text">Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</div>
                  <div className="footer__contacts contacts-footer">
                     <a href="" className="contacts-footer__item _icon-location">Sawojajar Malang, Indonesia</a>
                     <a href="tel:+62894563455" className="contacts-footer__item _icon-phone">+6289 456 3455</a>
                     <a href="https://www.funiro.com" target="_blank" className="contacts-footer__item">www.funiro.com</a>
                  </div>
               </div>
               <div data-spollers="768,max" className="footer__menu menu-footer">
                  <div className="menu-footer__column">
                     <button type="button" data-spoller className="menu-footer__title _footer-title">Menu</button>
                     <ul className="menu-footer__list">
                        <li><a href="" className="menu-footer__link">Products</a></li>
                        <li><a href="" className="menu-footer__link">Rooms</a></li>
                        <li><a href="" className="menu-footer__link">Inspirations</a></li>
                        <li><a href="" className="menu-footer__link">About Us</a></li>
                        <li><a href="" className="menu-footer__link">Terms & Policy</a></li>
                     </ul>
                  </div>
                  <div className="menu-footer__column">
                     <button type="button" data-spoller className="menu-footer__title _footer-title">Account</button>
                     <ul className="menu-footer__list">
                        <li><a href="" className="menu-footer__link">My Account</a></li>
                        <li><a href="" className="menu-footer__link">Checkout</a></li>
                        <li><a href="" className="menu-footer__link">My Cart</a></li>
                        <li><a href="" className="menu-footer__link">My catalog</a></li>
                     </ul>
                  </div>
                  <div className="menu-footer__column">
                     <button type="button" data-spoller className="menu-footer__title _footer-title">Stay Connected</button>
                     <ul className="menu-footer__list">
                        <li><a href="" className="menu-footer__link">Facebook</a></li>
                        <li><a href="" className="menu-footer__link">Instagram</a></li>
                        <li><a href="" className="menu-footer__link">Twitter</a></li>
                     </ul>
                  </div>
               </div>
               <div className="footer__subscribe subscribe">
                  <div className="subscribe__title _footer-title">Stay Updated</div>
                  <form data-message="subscribe" data-test action="#" className="subscribe__form">
                     <div style={{display: isDisplay}}>Enter your email</div>
                     <input onChange={enterEmail} value={inputText} type="email" name="form[]" data-error="Ошибка" placeholder="Enter your email" className="subscribe__input" />
                     <button onClick={onClickButton} type="button" className="subscribe__button _icon-send"></button>
                  </form>
                  <div className={popup}>
                     <div className="popup__content">
                        <div className="popup__body">
                           <div>Thank you for your trust. We sent information to your address "{inputText}"</div>
                           <div onClick={onClickClose} className="popup__close">X</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
export default Footer;