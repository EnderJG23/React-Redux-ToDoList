import {
    INITIAL_GET_TASKS,
    INITIAL_ADD_TASK,
    INITIAL_SELECT_TASK,
    INITIAL_UPDATE_TASK,
    INITIAL_DELETE_TASK,
    SUCCESS_GET_TASKS,
    SUCCESS_ADD_TASK,
    SUCCESS_SELECT_TASK,
    SUCCESS_UPDATE_TASK,
    DELETE_TASK_SUCCESS,
    ERROR_GET_TASKS,
    ERROR_ADD_TASK,
    ERROR_SELECT_TASK,
    ERROR_UPDATE_TASK,
    DELETE_TASK_ERROR,
    REMOVE_TASK_ERROR
} from '../../types';

const initialState = {
    TasksComplete: [],
    TasksIncomplete: [],
    TaskError: null,
    Loading: false,
    TaskActive: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_GET_TASKS:
        case INITIAL_ADD_TASK:
        case INITIAL_SELECT_TASK:
        case INITIAL_UPDATE_TASK:
        case INITIAL_DELETE_TASK:
            return {
                ...state,
                Loading: action.payload
            }
        case SUCCESS_GET_TASKS:
            return {
                ...state,
                TasksIncomplete : action.payload.filter(task => task.pending ), 
                TasksComplete : action.payload.filter(task => !task.pending ),
                Loading: false            
            }
        case SUCCESS_ADD_TASK:
            return {
                ...state,
                TasksIncomplete : [ action.payload, ...state.TasksIncomplete ],
                TaskError: null,
                Loading: false
            }
        case SUCCESS_SELECT_TASK:
            return {
                ...state,
                TaskActive : action.payload,
                TaskError: null
            }
        case SUCCESS_UPDATE_TASK:
            return {
                ...state,
                TasksIncomplete : state.TasksIncomplete.map(task => task.id === action.payload.id ? action.payload : task),
                TaskError: null,
                Loading: false
            }
        case DELETE_TASK_SUCCESS:
            return {
                ...state,
                TasksComplete : state.TasksComplete.filter(task => task.id !== action.payload),
                TaskActive : ( state.TaskActive !==null && state.TaskActive.id === action.payload ? null: state.TaskActive),
                TaskError: null,
                Loading: false
            }
        case ERROR_GET_TASKS:
        case ERROR_ADD_TASK:
        case ERROR_SELECT_TASK:
        case ERROR_UPDATE_TASK:
        case DELETE_TASK_ERROR:
            return {
                ...state,
                TaskError: action.payload,
                Loading: false
            }
        case REMOVE_TASK_ERROR:
            return {
                ...state,
                TaskError: null,
                Loading: false
            }
        default:
            return state;
    }
};