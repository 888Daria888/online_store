import React, { Component } from 'react';
import { connect } from "react-redux";
import { getClassMenuBody } from '../redux/actions';

class HeaderMenu extends Component {
   state = {
      isHover1: 'menu__item',
      isHover2: 'menu__item',
   }
   componentDidMount =()=>{

   }
   onClickMenuArrow1 = () => {
      const isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
      if (window.innerWidth > 768 && isMobile.any()) {
         if(this.state.isHover1 == 'menu__item _hover'){            
            this.setState({isHover1: 'menu__item'})
            return
         }
         this.setState({isHover1: 'menu__item _hover'})
      }
   }
   onClickMenuArrow2 = () => {
      const isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
      if (window.innerWidth > 768 && isMobile.any()) {
         if(this.state.isHover2 == 'menu__item _hover'){            
            this.setState({isHover2: 'menu__item'})
            return
         }
         this.setState({isHover2: 'menu__item _hover'})
      }
   }

   render() {
      const { isHover1, isHover2 } = this.state;

      return (
         <div className='header__main'>
            <a href='' className='header__logo'>Funiro</a>
            <div className='header__menu menu'>
               <nav className={this.props.calssMenuBody}>
                  <ul data-spollers="768,max" className='menu__list'>
                     <li className={isHover1}>
                        <a href='#' className='menu__link'>Products</a>
                        <button onClick={this.onClickMenuArrow1} data-spoller type='button' className='menu__arrow _icon-arrow-down'></button>
                        <ul className="menu__sub-list">
                           <li className="menu__sub-item">
                              <a href="#" className="menu__sub-link">Product #1</a>
                           </li>
                           <li className="menu__sub-item">
                              <a href="#" className="menu__sub-link">Product #2</a>
                           </li>
                           <li className="menu__sub-item">
                              <a href="#" className="menu__sub-link">Product #3</a>
                           </li>
                           <li className="menu__sub-item">
                              <a href="#" className="menu__sub-link">Product #4</a>
                           </li>
                        </ul>
                     </li>
                     <li className={isHover2}>
                        <a href="#" className="menu__link">Rooms</a>
                        <button onClick={this.onClickMenuArrow2} data-spoller type="button" className="menu__arrow _icon-arrow-down"></button>
                        <ul className="menu__sub-list">
                           <li className="menu__sub-item">
                              <a href="#" className="menu__sub-link">Room #1</a>
                           </li>
                           <li className="menu__sub-item">
                              <a href="#" className="menu__sub-link">Room #2</a>
                           </li>
                           <li className="menu__sub-item">
                              <a href="#" className="menu__sub-link">Room #3</a>
                           </li>
                           <li className="menu__sub-item">
                              <a href="#" className="menu__sub-link">Room #4</a>
                           </li>
                        </ul>
                     </li>
                     <li className='menu__item'>
                        <a href="#" className="menu__link">Inspirations</a>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      )
   }
}
export default connect(
   (state) => ({ calssMenuBody: state.headerReducer.globalCalssMenuBody}),
   (dispatch) => ({
      getClassMenuBody: (globalCalssMenuBody) => dispatch(getClassMenuBody(globalCalssMenuBody)),
   })
)(HeaderMenu);