import React from 'react';
import styled from '@emotion/styled';

const Header = () => {

    return ( 
        <ContainerHeader>
            <p>Administrador de Tareas <span>(React, Redux)</span></p> 
        </ContainerHeader>
    );
}


 
export default Header;


///////////////////////  STYLE COMPONENT  ///////////////////////////////

const ContainerHeader = styled.header`
    background: rgba(31, 41, 66, 0.973); 
    min-height: 1.5rem;  
    color: $white;
    padding: 1.5rem 2rem; 
    text-align: center;
    p {
        color: #ffff;
        margin: 0;
        font-size: 1.2rem;
        span {
            font-weight: bold;
        }
    }
`;
