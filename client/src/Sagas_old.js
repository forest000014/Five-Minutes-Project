import { call, put, takeEvery } from 'redux-saga/effects';
import Client from './Client_old';
import * as Actions from './Actions';

function* fetchSearchData(action) {
  const searchData = yield call(Client.search, action.payload.firstName); // firstName
  const result = yield put(Actions.changeSearchData(searchData)); // searchData

  // if it is from a redux-action, we get an object with error set not a thrown error
  if (result !== undefined) {
    const { error } = result;
    if (error) {
      throw result;
    }
  }
  return result;
}

function* watchFetchSearchData() {
  yield takeEvery('FETCH_SEARCH_DATA', fetchSearchData);
}
export default watchFetchSearchData;