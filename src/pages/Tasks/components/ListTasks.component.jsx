import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Task from './Task.component';


const ListTasks = ({ title, data }) => {

    useEffect(() => {

        // eslint-disable-next-line
    }, []);

    return ( 
        <>
            <ListTaskStyle>
                <h2>{ title }:</h2>
                <ul>
                    { (data && data.length  === 0) 
                        ? (
                            <li>
                                <p>No hay tareas...</p>
                            </li>)
                        : ( data.map(taskItem => (
                            <Task 
                                key={ taskItem.id}
                                data={ taskItem }
                            />
                        )))
                    }                                        
                </ul>
            </ListTaskStyle>
        </>
    );
}
 
export default ListTasks;


const ListTaskStyle = styled.div`
    padding: 3rem;
    padding-top: 1rem;
    background: #ffff;
    border-radius: 1rem;
    width: 50%;
    height: 50vh;
    margin: 0 4rem;
    overflow-y: hidden;
    overflow-x: hidden;
    h2 {
        color: #00000087;
    }
    ul {
        padding: 1rem 0rem;
        li {
            border: 1px solid #0000001f;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: left;
            padding: 0.5rem 1rem;
            span {
                text-align: center;
                &:first-child {
                    color: #202d468f;
                    font-weight: 700;
                    padding: 0 1rem;
                    width: 30%;
                }
                &:last-child {
                    display: flex;
                }
            }
            p {
                width: 100%;
            }
        }
    }
    &:first-of-type {            
        box-shadow: 0px 5px 0px #ff040459;
        li {
            span {
                &:last-child {
                    color: #202d468f;
                    font-weight: 700;
                    padding: 0 1rem;
                    width: 40%;
                    display: block;
                    button {
                        border-radius: 1rem;
                        padding: 0.2rem 1rem;
                        border: 1px solid #0b9b4c59;
                        background: #0b9b4c;
                        color: #ffff;
                        font-size: 14px;
                        &:last-child {
                            margin-top: .5rem;
                            border: 1px solid #ffffff;
                            background: #1a32555c;
                            &:hover {
                                background: #1a3255;
                            }
                        }
                    }
                }
            }
        }
    }
    &:last-of-type {
        box-shadow: 0px 5px 0px #0b9b4c59;
        li {
            span {
                &:last-child {
                    display: flex;
                    button {
                        border-radius: 1rem;
                        padding: 0.2rem 1rem;
                        border: 1px solid #f009;
                        background: #f009;
                        color: #ffff;
                        font-size: 14px;
                    }
                }
            }
        }
    }
`;
