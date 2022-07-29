import React, { Component } from 'react';
import { connect } from "react-redux";
import avatarImg from '../img/avatar.png'

class HeaderActions extends Component {
   
   render() {
      return (
         <div className="header__actions actions-header">
            <a href="" className="actions-header__item actions-header__item_favorites _icon-favorite"><span style={{visibility: this.props.styleVisibilityFavorive}} className='span-favorites '>{this.props.counterItemLikes}</span></a>
            <div className="actions-header__item cart-header">
               <a href="" className="cart-header__icon _icon-cart"><span style={{visibility: this.props.styleVisibilityCart}}>{this.props.counterItem}</span></a>
               <div className="cart-header__body">
                  <ul className="cart-header__list cart-list"></ul>
               </div>
            </div>
            <a href="" className="actions-header__item actions-header__item_user _ibg">
               <img src={avatarImg} alt="Avatar" />
            </a>
         </div>
      )
   }
}
export default connect(
   (state) => ({ counterItem: state.mainReducer.globalСounter, counterItemLikes: state.mainReducer.globalСounterLikes,  styleVisibilityCart: state.mainReducer.globalStyleVisibilityCart, styleVisibilityFavorive: state.mainReducer.globalStyleVisibilityFavorite,}),
)(HeaderActions);