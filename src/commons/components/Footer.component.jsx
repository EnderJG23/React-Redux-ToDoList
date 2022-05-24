import React, { useState } from 'react';
import styled from '@emotion/styled';


const Footer = () => {

    const [ FullYear, changeYear ] = useState(new Date().getFullYear());
    
    // eslint-disable-next-line
    const handleChangeYear = () => {
        changeYear(new Date().getFullYear());
    }
    
    
    return ( 
        <ContainerFooter>
            <p>{ FullYear } Github. <i>@EnderJG23</i></p>
        </ContainerFooter>
    );
}


 
export default Footer;


///////////////////////  STYLE COMPONENT  ///////////////////////////////

const ContainerFooter = styled.footer`
    position: absolute;
    bottom: 0;
    border-start-end-radius: 2rem;
    box-shadow: 0px 4px 18px #00000057;
    background: #ffff;
    display: flex;
    align-items: center;
    justify-content: end;
    font-style: italic;
    text-shadow: 1px 1px 1px #ad0a0a1c;
    padding: 0.5rem 2rem;
    color: #00000096;
    p {
        font-size: 10px;
        margin: 0;
    }
`;