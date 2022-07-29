
import React, { Component } from 'react';
import { connect } from "react-redux";
import { getError } from '../redux/actions';
import { searchText } from '../redux/actions';



class HeaderSearch extends Component {
   state = {
      inputText: '',
      showInfoSearch: 'none',
      showIconSearch: '',
      searchFormClass: 'search-form',
   }

   submitHandler = (e) => {
      e.preventDefault();
   }
   searchHandler = (e) => {
      this.setState({ inputText: e.target.value });
      if (this.state.inputText.length < 2) {
         this.setState({ showInfoSearch: 'none' })
         return
      }
      this.setState({ showInfoSearch: 'block' })
      this.getApi();
   }
   onClickSearchIcon = () => {
      if (window.innerWidth < 991.98) {
         if((this.state.searchFormClass == 'search-form _active')){
            this.setState({searchFormClass: 'search-form'})
            return
         }
         this.setState({ searchFormClass: 'search-form _active'})
      }
   }
   getApi = () => {
      fetch(`http://www.omdbapi.com/?s=${this.state.inputText}&apikey=3b0fba05`)
         .then((res) => res.json())
         .then((data) => {
            if (data.Search) {
               this.props.searchText(data.Search ?? [])
               this.props.getError(false)
               return
            }
            this.props.getError(true)
         })
   }


   render() {
      // if (this.props.isError) {
      //    return 'Not found'
      // }
      const { inputText, showInfoSearch, searchFormClass } = this.state;
      return (
         <div className='header__search' >
            <div className={searchFormClass}>
               <button onClick={this.onClickSearchIcon} type="button" className="search-form__icon _icon-search"></button>
               <form onSubmit={this.submitHandler} action="#" className="search-form__item">
                  <button type="submit" className="search-form__btn _icon-search"></button>
                  <input onChange={this.searchHandler} value={inputText} className="search-form__input" type="text" name="form[]" placeholder="Search for" />
               </form>
            </div>
            <div style={{ display: showInfoSearch }} className='search-block'>
               <ul className='search-block__column'>
                  {this.props.searchItems.map((i) => (
                     <li className="search-block__item" key={i.imdbID}>
                        <a href='#'><h4 className="search-block__title">{i.Title}</h4></a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      )
   }
}
export default connect(
   (state) => ({ searchItems: state.headerReducer.globalSearch, isError: state.headerReducer.globalSearchError }),
   (dispatch) => ({
      searchText: (globalSearch) => dispatch(searchText(globalSearch)),
      getError: (globalSearchError) => dispatch(getError(globalSearchError))
   })
)(HeaderSearch);
