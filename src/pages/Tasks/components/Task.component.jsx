import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask, selectTaskEdit } from '../../../redux/actions/task/taskActions';

const Task = ({ data }) => {

    const dispatch = useDispatch();
    const SelectTaskEdit = (data) => dispatch( selectTaskEdit(data) ); 
    

    const handleStatusTask = (taskInfo) => {
        if (taskInfo.pending) taskInfo.pending = false;
        else taskInfo.pending = true;               
        dispatch( updateTask(taskInfo) );
    }

    return ( 
        <>
        <li>
            <span >{ data.date }</span>
            <p>{ data.taskName }</p>
            {
                data.pending ? 
                <span >
                    <button
                        onClick={ () => SelectTaskEdit(data) }
                        type='button'
                    >Editar</button>
                    <button
                        onClick={ () => handleStatusTask(data) }
                        type='button'
                    >Marcar Lista</button> 
                </span>
            :
                <span>
                    <button
                        onClick={ () => dispatch( deleteTask(data.id)) }
                        type='button' 
                    >Eliminar
                    </button>
                </span>
            }
        </li>
        </>
    );
}

export default Task;