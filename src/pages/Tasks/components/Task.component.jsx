import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask, selectTaskEdit } from '../../../redux/actions/task/taskActions';

const Task = ({ data }) => {

    const dispatch = useDispatch();

    const DeleteTask = () => dispatch( deleteTask() ); 
    const UpdateTask = () => dispatch( updateTask() ); 
    const SelectTaskEdit = () => dispatch( selectTaskEdit() ); 
    

    const handleStatusTask = (taskInfo) => {
        if (taskInfo.pending) taskInfo.pending = false;
        else taskInfo.pending = true;               
        UpdateTask(taskInfo);
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
                        onClick={ () => DeleteTask(data._id) }
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