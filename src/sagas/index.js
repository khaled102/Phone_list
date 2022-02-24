import {all, fork} from 'redux-saga/effects';
import { itemsSagas } from '../Phones';

export default function* rootSaga(getState) {
  yield all([
    fork(itemsSagas),
  ]);
}