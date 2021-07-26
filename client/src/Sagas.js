import { call, put, takeEvery } from 'redux-saga/effects';
import Client from './Client';
import * as Actions from './Actions';

function* fetchSearchData(action) {
  const searchData = yield call(Client.search, action.payload.userId, action.payload.month); // searchData, firstName
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
// index.js에서 import해서, sagaMiddleware.run(watchFetchSearchData)에 파라미터로 넘겨줌
