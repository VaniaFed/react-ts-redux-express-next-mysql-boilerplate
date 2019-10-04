import { all } from 'redux-saga/effects';
import { watchFetchUser } from './fetch-user';

export function* rootSaga() {
    yield all([
        watchFetchUser(),
    ]);
}
