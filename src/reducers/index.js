import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import { itemReducer } from '../Phones';

export default (history) => combineReducers({
    router: connectRouter(history),
    items: itemReducer,
});