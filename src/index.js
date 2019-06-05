import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


import App from './components/App/App';


function* fetchShift(action) {
    try {
        const serverResponse = yield axios.get('/api/employee');
        const action = { 
            type: 'SET_SHIFT',
            payload: serverResponse.data
        };
        yield put(action);  //triggers reducer
    } catch (error) {
        console.log('Error in axios GET: ', error);
        alert('Something Went Worng!!!');
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


const sagaMiddleware = createSagaMiddleware();



const shiftList = (state= [], action) => {
    switch (action.type) {
        case 'SET_SHIFT':
            return action.payload;
        default:
            return state;
    }
};

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        shiftList,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(shiftSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
