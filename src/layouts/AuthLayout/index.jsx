import React, { 
    // Fragment, 
    useEffect, 
    // useContext 
} from 'react';


const AuthLayout = props => {

    const {
        dispatch,
        // children,
        // settings,
        // location = { pathname: '/' },
    } = props;

    useEffect(() => {
        if (dispatch) {
            dispatch({
                type: 'user/fetchCurrent',
            });
        }
    }, [dispatch]);
    /*
    const handleMenuCollapse = payload => {
        if (dispatch) {
            dispatch({
                type: 'global/changeLayoutCollapsed',
                payload,
            });
        }
    };
    */

    return (
        <>
            <span>AuthLayout</span>
        </>
    );
    
};

export default AuthLayout;