import {
    call, put, takeLatest
  } from 'redux-saga/effects';
  import { ALLITEMS } from '../actions/ACTION_TYPES';
  import {
      allItemsPending,
      allItemsError,
      allItemsSuccess,
  } from '../actions';
  import { getAllPhonesAPI } from '../services';
  
  function* allItemsSaga() {
    yield put(allItemsPending());
    try {
      const response = yield call(getAllPhonesAPI);
      yield put(allItemsSuccess(response));
    } catch (error) {
      yield put(allItemsError(error.data));
    }
  }
  export function* watchAllItemsSaga() {
    yield takeLatest(ALLITEMS.ACTION, allItemsSaga);
  }