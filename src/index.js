import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';



import App from './components/App/App';
import rootSaga from './redux/sagas';
import rootReducer from './redux/reducers';



const sagaMiddleware = createSagaMiddleware();

const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];



// Create one store that all components can use
const store = createStore(
    rootReducer, 
    // Add sagaMiddleware to our store
    applyMiddleware(...middlewareList),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
