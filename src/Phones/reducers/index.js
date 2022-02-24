import { combineReducers } from 'redux';
import {allItemsReducer} from './all-items-reducer';

export const itemReducer = combineReducers({
    allItemsReducer: allItemsReducer,
});