import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';

import {getPolls, getUserPolls, getCurrentPoll} from "../store/actions";


// Changes HomePage to PollPage
function handleSelect(id, props) {
    // get History obj from ReactRouter
    const {history} = props;
    history.push(`/poll/${id}`);
}

function formatTitle(topBlue, jungleBlue, midBlue, botBlue, supportBlue, topRed, jungleRed, midRed, botRed, supportRed) {
    let text = "";
    if (topBlue && jungleBlue && midBlue && botBlue && supportBlue && topRed && jungleRed && midRed && botRed && supportRed) {
        text = topBlue + ', ' + jungleBlue + ', ' + midBlue + ', ' + botBlue + ', ' + supportBlue + " vs " + topRed + ', ' + jungleRed + ', ' + midRed + ', ' + botRed + ', ' + supportRed
    }
    return text
}

function Polls(props) {

    const polls = props.polls.map(
        poll => <li onClick={() => handleSelect(poll._id, props)}
                    key={poll._id}>{formatTitle(poll.topBlue, poll.jungleBlue, poll.midBlue,
            poll.botBlue, poll.supportBlue, poll.topRed, poll.jungleRed, poll.midRed, poll.botRed, poll.supportRed)}</li>
    );

    const {auth, getPolls, getUserPolls} = props;

    useEffect(() => {
        const {getPolls} = props;
        getPolls();
    }, []);

    return (
        <Fragment>
            {auth.isAuthenticated && (
                <div className="buttons_center">
                    <button className="button" onClick={getPolls}>All Polls</button>
                    <button className="button" onClick={getUserPolls}>My Polls</button>
                </div>
            )}
            <ul className="polls">{polls}</ul>
        </Fragment>
    )

}

export default connect(store => ({
        auth: store.auth,
        polls: store.polls
    }), {getPolls, getUserPolls, getCurrentPoll}
)(Polls);