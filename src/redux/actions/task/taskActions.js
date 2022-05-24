import clienteAxios from '../../../config/clientHttp/axios';
import uuid from 'react-uuid';
import {
    INITIAL_GET_TASKS,
    INITIAL_ADD_TASK,
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
    DELETE_TASK_ERROR  
} from '../../types';
import Swal from 'sweetalert2';
import { messages } from '../../../commons';


export const addTask = task => { 
    
    return async (dispatch) => {

        dispatch({
            type: INITIAL_ADD_TASK,
            payload: true
        });
        
        try {            
            let dateAt = new Date();
            task.id = uuid();
            task.pending = true;
            task.date = `${dateAt.getUTCDay()}-${dateAt.getMonth()}-${dateAt.getUTCFullYear()} ${dateAt.getUTCHours()}:${dateAt.getUTCMinutes()}`;
            await clienteAxios.post( '/' , task);                       
            dispatch({
                type: SUCCESS_ADD_TASK,
                payload: task
            });
            Swal.fire(
                'correcto',
                messages.success_add_task,
                'success'
            );            
        } catch (error) {
            dispatch({
                type: ERROR_ADD_TASK,
                payload: true
            });
            Swal.fire({
                icon: 'error',
                title: messages.error_exist,
                text: messages.try_again
            });
        }
    };
};

export const getTasks = () => {
    
    return async (dispatch) => {        
        dispatch({
            type: INITIAL_GET_TASKS,
            payload: true
        });

        try {
            const result = await clienteAxios.get('/tasks');
            dispatch({
                type: SUCCESS_GET_TASKS,
                payload: result.data
            });
            
        } catch (error) {
            dispatch({
                type: ERROR_GET_TASKS,
                payload: true
            });
            Swal.fire({
                icon: 'error',
                title: messages.try_again,
                text: messages.error_exist,
            }); 
        }
    }
}

export const deleteTask = (id) => {
    
    return async (dispatch) => {        
        dispatch({
            type: INITIAL_DELETE_TASK,
            payload: id
        });

        try {
            await clienteAxios.delete(`/${id}`);
            getTasks();
            dispatch({
                type: DELETE_TASK_SUCCESS
            });
            Swal.fire(
                'Eliminado',
                messages.delete_success_task,
                'success'
            )
        } catch (error) {
            dispatch({
                type: DELETE_TASK_ERROR,
                payload: true
            });
            Swal.fire({
                icon: 'error',
                title: messages.error_exist,
                text: messages.error_delete_task
            }); 
        }
    }
}

export const updateTask = (task) => {
    
    return async (dispatch) => {        

        dispatch({
            type: INITIAL_UPDATE_TASK,
            payload: true
        });

        try {
            await clienteAxios.put(`/${task.id}`, task);
            dispatch({
                type: SUCCESS_UPDATE_TASK,
                payload: task
            });
            Swal.fire(
                'Guardado',
                messages.success_update_task,
                'success'
            );
        } catch (error) {
            dispatch({
                type: ERROR_UPDATE_TASK,
                payload: true
            });
            Swal.fire({
                icon: 'error',
                title: messages.error_exist,
                text: messages.error_update_task
            }); 
        }
    }
}

export const selectTaskEdit = (task) => {

    return async (dispatch) => {
        dispatch({
            type: SUCCESS_SELECT_TASK,
            payload: task
        });       
    }
}

export const deleteSelectTaskEdit = (task) => {

    return async (dispatch) => {
        dispatch({
            type: ERROR_SELECT_TASK,
            payload: task
        });       
    }
}