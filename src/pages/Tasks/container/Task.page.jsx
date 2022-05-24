import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import '../../../stylesGlobal/index.css';
import { labels } from '../../../commons';
import { Loading } from '../../../commons/components';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../../redux/actions/task/taskActions';
import { FormActionTask, ListTasks, StatusTask } from '../components';

const TaskPage = () => {
    
    const dispatch = useDispatch();
    const ListTasksData = () => dispatch( getTasks() );
    const TasksIncomplete = useSelector(state => state.tasks.TasksIncomplete); 
    const TasksComplete = useSelector(state => state.tasks.TasksComplete); 
    
    const [ loading, setloading] = useState(true);
     
    useEffect(() => {
        ListTasksData();
        setTimeout(() => {
            setloading(false);
        }, 2000);
        // eslint-disable-next-line
    }, []);


    return (
        <>
        { loading ? <Loading mjs={ 'Espere por favor...' }/> :
            (
                <>
                    <ContainerActionTaskStyle>
                        <div>   
                            <span>{ labels.new_task }:</span>
                            <FormActionTask />
                        </div>
                        <StatusTask />
                    </ContainerActionTaskStyle>

                    <ContentListTaskStyle>
                        <ListTasks 
                            title={ labels.task_incomplete } 
                            data={ TasksIncomplete }
                        />
                        <ListTasks 
                            title={ labels.task_complete } 
                            data={ TasksComplete }
                        />
                    </ContentListTaskStyle>
                </>
            )
        }  
        </>        
    );
}
 
export default TaskPage;


///////////////////////  STYLE COMPONENT  ///////////////////////////////

const ContainerActionTaskStyle = styled.div`
    border-bottom:  5px solid #309db6;
    background: aliceblue;
    padding: 2rem;
    width: auto;
    color: #202d46;
    font-weight: 800;
    font-family: sans-serif;
    display: flex;
    div {
        width: 50%;
        padding: 2rem 0;
        padding-top: 0;
    }

`;

const ContentListTaskStyle = styled.div`
    display: flex;
    margin: 2rem;
    align-items: center;
    justify-content: center;
`;
