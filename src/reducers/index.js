import {combineReducers} from 'redux';
import userReducer from './user';
import { reducer as forms } from 'redux-form';

const allReducers = combineReducers({
    users: userReducer,
    form: forms,
});

export default allReducers;