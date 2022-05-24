import { combineReducers } from 'redux';
import TaskReducer from './task/taskReducers';

export default combineReducers({
    tasks: TaskReducer
});