import { put, call, takeEvery } from 'redux-saga/effects';
import { actions } from 'actions/index';
import { User } from 'types/index'

import { FETCH_USER_REQUEST } from 'constants.ts';
import { services } from 'services/index';

export function* fetchUser() {
    try {
        const user: User = yield call(services.getUser);
        yield put(actions.fetchUserSuccess(user));
    } catch (error) {
        yield put(actions.fetchUserError(error.message));
    }
}

export function* watchFetchUser() {
    yield takeEvery(FETCH_USER_REQUEST, fetchUser);
}
