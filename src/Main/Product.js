
import React, { Component } from 'react';
import { connect } from "react-redux";
import imgOne from '../img/products/01.jpg';
import imgTwo from '../img/products/02.jpg';
import imgThree from '../img/products/03.jpg';
import imgFour from '../img/products/04.jpg';
import { getStyleVisibilityCart, getСounterCard, getLikesCard, getStyleVisibilityFavorite} from '../redux/actions';


class Product extends Component {
   onClickAddToCard=()=>{
      this.props.getStyleVisibilityCart('visible')
      this.props.getСounterCard(Number(this.props.counterItem) + 1)
   }
   onClickLikes =()=>{
      this.props.getStyleVisibilityFavorite('visible')
      this.props.getLikesCard(Number(this.props.counterItemLikes) + 1)
   }
   render() {
      return (
         <section className="page__products products">
            <div className="products__container _container">
               <h2 className="products__title _title">Our Products</h2>
               <div className="products__items">
                  <article data-pid="1" className="products__item item-product">
                     <div className="item-product__labels">
                        <div className="item-product__label item-product__label_sale">-30%</div>
                        <div className="item-product__label item-product__label_new">New</div>
                     </div>
                     <a href="" className="item-product__image _ibg">
                        <img src={imgOne} alt="Syltherine"/>
                     </a>
                     <div className="item-product__body">
                        <div className="item-product__content">
                           <h3 className="item-product__title">Syltherine</h3>
                           <div className="item-product__text">Stylish cafe chair</div>
                        </div>
                        <div className="item-product__prices">
                           <div className="item-product__price">Rp 2.500.000</div>
                           <div className="item-product__price item-product__price_old">Rp 3.500.000</div>
                        </div>
                        <div className="item-product__actions actions-product">
                           <div className="actions-product__body">
                              <button  onClick={this.onClickAddToCard} className="actions-product__button btn btn_white">Add to cart</button>
                              <a href="" className="actions-product__link _icon-share">Share</a>
                              <button onClick={this.onClickLikes} className="actions-product__link _icon-favorite">Like</button>
                           </div>
                        </div>
                     </div>
                  </article>
                  <article data-pid="2" className="products__item item-product">
                     <div className="item-product__labels">
                        <div className="item-product__label item-product__label_new">New</div>
                     </div>
                     <a href="" className="item-product__image _ibg">
                        <img src={imgTwo} alt="Leviosa" />
                     </a>
                     <div className="item-product__body">
                        <div className="item-product__content">
                           <h3 className="item-product__title">Leviosa</h3>
                           <div className="item-product__text">Stylish cafe chair</div>
                        </div>
                        <div className="item-product__prices">
                           <div className="item-product__price">Rp 2.500.000</div>
                        </div>
                        <div className="item-product__actions actions-product">
                           <div className="actions-product__body">
                              <button onClick={this.onClickAddToCard} className="actions-product__button btn btn_white">Add to cart</button>
                              <a href="" className="actions-product__link _icon-share">Share</a>
                              <button onClick={this.onClickLikes} className="actions-product__link _icon-favorite">Like</button>
                           </div>
                        </div>
                     </div>
                  </article>
                  <article data-pid="3" className="products__item item-product">
                     <div className="item-product__labels">
                        <div className="item-product__label item-product__label_sale">-50%</div>
                     </div>
                     <a href="" className="item-product__image _ibg">
                        <img src={imgThree} alt="Lolito" />
                     </a>
                     <div className="item-product__body">
                        <div className="item-product__content">
                           <h3 className="item-product__title">Lolito</h3>
                           <div className="item-product__text">Luxury big sofa</div>
                        </div>
                        <div className="item-product__prices">
                           <div className="item-product__price">Rp 2.500.000</div>
                           <div className="item-product__price item-product__price_old">Rp 3.500.000</div>
                        </div>
                        <div className="item-product__actions actions-product">
                           <div className="actions-product__body">
                              <button onClick={this.onClickAddToCard} className="actions-product__button btn btn_white">Add to cart</button>
                              <a href="" className="actions-product__link _icon-share">Share</a>
                              <button onClick={this.onClickLikes} className="actions-product__link _icon-favorite">Like</button>
                           </div>
                        </div>
                     </div>
                  </article>
                  <article data-pid="4" className="products__item item-product">
                     <div className="item-product__labels"></div>
                     <a href="" className="item-product__image _ibg">
                        <img src={imgFour} alt="Lolito" />
                     </a>
                     <div className="item-product__body">
                        <div className="item-product__content">
                           <h3 className="item-product__title">Respira</h3>
                           <div className="item-product__text">Minimalist fan</div>
                        </div>
                        <div className="item-product__prices">
                           <div className="item-product__price">Rp 500.000</div>
                        </div>
                        <div className="item-product__actions actions-product">
                           <div className="actions-product__body">
                              <button onClick={this.onClickAddToCard} className="actions-product__button btn btn_white">Add to cart</button>
                              <a href="" className="actions-product__link _icon-share">Share</a>
                              <button onClick={this.onClickLikes} className="actions-product__link _icon-favorite">Like</button>
                           </div>
                        </div>
                     </div>
                  </article>
               </div>
               <div className="products__footer">
                  <a href="" className="products__more btn btn_white">Show More</a>
               </div>
            </div>
         </section>
      )
   }
}

export default connect(
   (state) => ({counterItem: state.mainReducer.globalСounter, counterItemLikes: state.mainReducer.globalСounterLikes, styleVisibility: state.mainReducer.globalStyleVisibility}),
   (dispatch) => ({
      getСounterCard: (globalСounter) => dispatch(getСounterCard(globalСounter)),
      getLikesCard: (globalСounterLikes) => dispatch(getLikesCard(globalСounterLikes)),
      getStyleVisibilityCart: (globalStyleVisibilityCart) => dispatch(getStyleVisibilityCart(globalStyleVisibilityCart)),
      getStyleVisibilityFavorite: (globalStyleVisibilityFavorite) => dispatch(getStyleVisibilityFavorite(globalStyleVisibilityFavorite)),
   })
)(Product);