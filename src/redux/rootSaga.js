import { all, fork } from 'redux-saga/effects';

import { watchInitialization, watchAuthentication } from '../modules/auth/sagas';

export default function* rootSaga() {
  yield all([
    fork(watchInitialization),
    fork(watchAuthentication)
  ]);
}
