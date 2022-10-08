import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    console.error(error)
    return (
       <div>
            <h2>Oops!</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText  || error.message}</i>
            </p>
        </div>
    );
};

export default Error;