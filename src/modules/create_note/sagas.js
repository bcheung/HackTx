import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import * as fbAPI from '../../core/firebase/fbAPI';
import NavigationService from '../../core/navigation/NavigationService';
import * as selectors from './selectors';
import * as types from './actionTypes';

function* uploadImageFlow(action) {
  try {
	const response = yield call(fetch, action.uri);
	console.tron.log('uploadImageFlow', response);	
	const blob = yield call([response, response.blob]);
	const user = yield select(selectors.getUser);
	const data = { blob, uid: user.uid };
	console.tron.log('uploadImageFlow', data);
    yield call(fbAPI.uploadImage, data);
    yield put({ type: types.UPLOAD_IMAGE_SUCCESS });
  } catch (error) {
    console.tron.log(error.message);
    yield put({ type: types.UPLOAD_IMAGE_FAILURE, error });
  }
}

export function* watchCreateNote() {
  yield all([takeLatest(types.UPLOAD_IMAGE_REQUEST, uploadImageFlow)]);
}
