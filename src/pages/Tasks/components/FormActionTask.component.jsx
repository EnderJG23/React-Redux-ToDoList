import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { addTask, updateTask, deleteSelectTaskEdit } from '../../../redux/actions/task/taskActions';

const FormActionTask = () => {

    const dispatch = useDispatch();

    const TasksActive = useSelector(state => state.tasks.TaskActive); 

    const [ textAction, changeTextAction ] = useState(null);
    const [ task, saveTask ] = useState( {
        taskName: ""
    });
    const { taskName } = task; 

    useEffect(() => {
        getActionForm(TasksActive);
        // eslint-disable-next-line
    }, [ TasksActive ]);


    const getActionForm = ( type ) => {
        if (!type) changeTextAction('Agregar Tarea');
        if (type) {
            changeTextAction('Editar Tarea');
            saveTask(TasksActive);
        }

    };

    const handleOnSubmit = (e) => {
        e.preventDefault(); 
        if (!taskName || taskName.trim().length === 0) return;
        if (!TasksActive) dispatch( addTask(task) );
        else dispatch( updateTask(task) );

        saveTask({
            taskName: ""
        });
    };

    const handleOnChange = (e) => {
        saveTask({ 
            ...task,
            [e.target.name]: e.target.value
        });    
        
        if (!e.target.name || e.target.name.trim().length === 0) dispatch( deleteSelectTaskEdit(TasksActive) );
    };
    
    return ( 
        <>
            <FormActionTaskStyle
                onSubmit={ handleOnSubmit }
                autoComplete='off'
            >
                <InputStyle 
                    className='mr-2'
                    type='text'
                    name='taskName'
                    placeholder='Nombre Tarea...'
                    onChange={ handleOnChange }
                    value={taskName}
                />
                <ButtonStyle
                    type='submit'
                >{ textAction }
                </ButtonStyle>
            </FormActionTaskStyle>
        </>
    );
}
 
export default FormActionTask;

///////////////////////  STYLE COMPONENT  ///////////////////////////////

const FormActionTaskStyle = styled.form`
    font-family: sans-serif;
    padding-top: 2rem;
`;

const InputStyle = styled.input`
    padding: 0.5rem 1rem;
    font-size: 14px;
    border-radius: 1rem;
    outline: none;
    border: 1.5px solid #0980ff;
    min-width: 65%;
`;

const ButtonStyle = styled.button`
    border-radius: 0.2rem;
    outline: none;
    padding: 0.5rem 1rem;
    background: #202d46;
    font-size: 14px;
    color: #ffff;
    &:active {
        transform: scale(1.01, 1.01);
    }
`;