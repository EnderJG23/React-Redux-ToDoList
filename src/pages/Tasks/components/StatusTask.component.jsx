import React from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';

const StatusTask = () => {

    const TasksIncomplete = useSelector(state => state.tasks.TasksIncomplete); 
    const TasksComplete = useSelector(state => state.tasks.TasksComplete); 
    
    return ( 
        <>
        <ContainerStatusTaskStyle>
            <div>
                <span>Tareas Incompletas</span>
                <span>{ TasksIncomplete === null ? 
                    <small>No disponible</small>
                :  
                    TasksIncomplete.length
                }</span>
            </div>
            <div>
                <span>Tareas Completas</span>
                <span>{ TasksComplete === null ? 
                    <small>No disponible</small>
                :  
                    TasksComplete.length
                }</span>
            </div>
        </ContainerStatusTaskStyle>   
        </>
    );
}
 
export default StatusTask;


///////////////////////  STYLE COMPONENT  ///////////////////////////////

const ContainerStatusTaskStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 50%;
    border-left: 1px solid #00000017;
    padding-bottom: 0;
    div {
        width: 100%;
        span {
            text-align: center;
            &:first-child {
                display: block;
                padding: 1rem 0;
            }
        }
    }
`;