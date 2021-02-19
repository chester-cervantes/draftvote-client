import React from 'react';

import ErrorMessage from "../components/ErrorMessage";
import Poll from "../components/Poll";
import { Redirect } from 'react-router-dom';

// renders iff windows url matches the correct poll
const PollPage = ({match, getPoll, isAuthenticated}) => {
    if (!isAuthenticated) return <Redirect to='/login'/>;

    getPoll(match.params.id);

    return (
        <div>
            <ErrorMessage />
            <Poll />
        </div>
    )
};

export default PollPage;