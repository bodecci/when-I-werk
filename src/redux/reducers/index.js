import { combineReducers} from 'redux';
import shiftList from './shiftListReducer';

const rootReducer = combineReducers({
    shiftList
});

export default rootReducer;