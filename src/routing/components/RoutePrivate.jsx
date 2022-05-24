import React, { useEffect } from 'react';
// import { Redirect, Route,  } from 'react-router-dom';
// import { AuthContext } from '../contexts_&_reducer/AuthState';


const RoutePrivate = ({ component: Component, ...props }) => {

    // const { auth, loading, userAuth } = useContext(AuthContext);

    useEffect(() => {
        // userAuth();
        // eslint-disable-next-line
    }, []);

    return (
        <>
        </>
        // <Route {...props} render={ props => !auth && !loading ? (
        //         <Redirect to='/' />
        //     ) : (
        //         <Component {...props} />
        //     ) } 
        // />
    );
};

export default RoutePrivate;