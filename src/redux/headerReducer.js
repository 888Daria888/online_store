const initiaState = {
   globalSearch: [],
   globalSearchError: false,
   globalCalssMenuBody: 'menu__body',
}
export const headerReducer = (state = initiaState, action) => {
   switch (action.type) {
      case 'SEAECH_TEXT':
         return {
            ...state,
            globalSearch: action.payload.globalSearch,
         }
      case 'CHANGE_CLASS_MENU_BODY':
         return {
            ...state,
            globalCalssMenuBody: action.payload.globalCalssMenuBody,
         }
      // case 'ERROR_SEARCH':
      //    return {
      //       ...state,
      //       globalSearchError: action.payload,
      //    }
      default: return state;
   }
}