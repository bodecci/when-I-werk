import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import shiftSaga from './shiftSaga';


// rootSaga bundles all other sagas
export default function* rootSaga() {
    yield all([
        loginSaga(),
        registrationSaga(),
        userSaga(),
        shiftSaga(),
    ]);
}