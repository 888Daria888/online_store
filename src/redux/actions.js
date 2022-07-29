import {
   SEAECH_TEXT,
   ERROR_SEARCH,
   CHANGE_CLASS_MENU_BODY,
   CLICK_TO_CARD,
   CLICK_TO_LIKES_CARD,
   GET_VISIBILITY_CART,
   GET_VISIBILITY_FAVORIT,
} from './types';

export function searchText(searchText) {
   return {
      type: SEAECH_TEXT,
      payload: { globalSearch: searchText }
   }
}
export function getError(isError) {
   return {
      type: ERROR_SEARCH,
      payload: isError
   }
}
export function getClassMenuBody(calssMenuBody) {
   return {
      type: CHANGE_CLASS_MENU_BODY,
      payload: {globalCalssMenuBody: calssMenuBody}
   }
}
export function getСounterCard(counter) {
   return {
      type: CLICK_TO_CARD,
      payload: { globalСounter: counter }
   }
}
export function getLikesCard(counterLikes) {
   return {
      type: CLICK_TO_LIKES_CARD,
      payload: { globalСounterLikes:  counterLikes }
   }
}
export function getStyleVisibilityCart(styleVisibility) {
   return {
      type: GET_VISIBILITY_CART,
      payload: { globalStyleVisibilityCart: styleVisibility}
   }
}
export function getStyleVisibilityFavorite(styleVisibility) {
   return {
      type: GET_VISIBILITY_FAVORIT,
      payload: { globalStyleVisibilityFavorite: styleVisibility}
   }
}
