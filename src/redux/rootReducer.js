import { combineReducers } from 'redux';
import {headerReducer} from './headerReducer';
import {mainReducer} from './mainReducer';

export const rootReducer = combineReducers({
   headerReducer,
   mainReducer
});