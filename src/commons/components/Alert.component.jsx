import React from 'react';
// import './styles/alert.scss';

const Alert = ({ mjs, className }) => ( 
    <div className={ className || 'alert-default' }>
        <p>{ mjs }</p>
    </div>
);
 
export default Alert;