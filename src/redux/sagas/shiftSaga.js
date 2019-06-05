import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchShift(action) {
    try {
        const serverResponse = yield axios.get('/api/employee');
        const Naction = { 
            type: 'SET_SHIFT',
            payload: serverResponse.data
        };
        yield put(Naction);  //triggers reducer
    } catch (error) {
        console.log('Error in axios GET: ', error);
        alert('Something Went Wrong!!!');
    }
}

function* postShift(action) {
    try {
        yield axios.post('/api/employee', action.payload);
        console.log('action.payload: ', action.payload);

        const nextAction = {type: 'FETCH_SHIFT'}
        yield put(nextAction);
    } catch (error) {
        console.log('Error in POST: ', error);
        alert(`There's a problem in POST`)
    }
}


function* shiftSaga() {
    yield takeEvery('FETCH_SHIFT', fetchShift);
    yield takeEvery('ADD_SHIFT', postShift);
}

export default shiftSaga;