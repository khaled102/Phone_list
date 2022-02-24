import {all, fork} from 'redux-saga/effects';
import {watchAllItemsSaga} from './all-items-saga';

export function* itemsSagas() {
  yield all([
    fork(watchAllItemsSaga),
  ]);
}