import React, { Component } from 'react';
import { connect } from "react-redux";
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';
import HeaderActions from './HeaderActions';
import { getClassMenuBody } from '../redux/actions';


class Header extends Component {
   state = {
      calssMenu: 'icon-menu',
   }
   onClickMenu = () => {
      if (this.state.calssMenu == 'icon-menu _active') {
         this.setState({ calssMenu: 'icon-menu' })
         this.props.getClassMenuBody('menu__body');
         return
      }
      this.setState({ calssMenu: 'icon-menu _active' });
      this.props.getClassMenuBody('menu__body _active');
   }

   render() {
      return (
         <header className='header'>
            <div className='header__wrapper'>
               <div className='header__container _container'>
                  <div className='header__body'>
                     <HeaderMenu />
                     <HeaderSearch />
                     <HeaderActions />
                     <button onClick={this.onClickMenu} type="button" className={this.state.calssMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                     </button>
                  </div>
               </div>
            </div>
         </header>
      );
   }
}

export default connect(
   (state) => ({ calssMenuBody: state.headerReducer.globalCalssMenuBody }),
   (dispatch) => ({
      getClassMenuBody: (globalCalssMenuBody) => dispatch(getClassMenuBody(globalCalssMenuBody)),
   })

)(Header);