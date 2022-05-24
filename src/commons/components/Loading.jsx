import React from 'react';
import '../../stylesGlobal/index.css';


const Loading = ({ mjs, className }) => ( 
    <div className={ className || 'loading-default' }>
        <p>{ mjs }</p>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
);
 
export default Loading;