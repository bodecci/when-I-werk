import { combineReducers} from 'redux';
import errors from './errorReducer';
import loginMode from './loginReducer';
import user from './userReducer';
import shiftList from './shiftList';

const rootReducer = combineReducers ({
    errors,  // registrationMessage
    loginMode, // value of 'login
    user,
    shiftList  // id and name of user if logged in
});

export default rootReducer