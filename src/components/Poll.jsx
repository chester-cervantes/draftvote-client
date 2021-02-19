import React, {Fragment, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Pie} from 'react-chartjs-2';

import {vote} from "../store/actions";
import {Col, Container, Row} from "react-grid-system";

// Needs to change if poll has more than two options
const COLORS = ['#6699cc', '#CC4C4C'];


function Poll(props) {
    const {poll, vote, auth} = props;
    const [showGraph, setShowGraph] = useState(false);
    const answers = poll.options && poll.options.map(option => (
        <button
            className="button"
            onClick={() => vote(poll._id, {answer: option.option})}
            key={option._id}>
            {option.option}
        </button>
    ));

    const data = poll.options && {
        // changes options from objects to array of strings
        labels: poll.options.map(option => option.option),
        datasets: [
            {
                label: poll.question,
                backgroundColor: COLORS,
                borderColor: '#000000',
                data: poll.options.map(option => option.votes)
            }
        ]
    };

    // Check if user already voted
    const hasVoted = () => poll.voted.indexOf(auth.user.id) >= 0;

    useEffect(() => {
        const replaceImage = (champion, role) => {
            let src = "http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/" + champion + ".png";
            let el = document.getElementById(role);
            console.log(el);
            if (el) {
                let elImg = el.firstElementChild;
                elImg.src = src;
                elImg.alt = role;
            }
        };

        const replaceImages = () => {
            if (poll.topBlue && poll.jungleBlue && poll.midBlue && poll.botBlue && poll.supportBlue && poll.topRed && poll.jungleRed && poll.midRed && poll.botRed && poll.supportRed) {
                replaceImage(poll.topBlue, "topBlue");
                replaceImage(poll.jungleBlue, "jungleBlue");
                replaceImage(poll.midBlue, "midBlue");
                replaceImage(poll.botBlue, "botBlue");
                replaceImage(poll.supportBlue, "supportBlue");
                replaceImage(poll.topRed, "topRed");
                replaceImage(poll.jungleRed, "jungleRed");
                replaceImage(poll.midRed, "midRed");
                replaceImage(poll.botRed, "botRed");
                replaceImage(poll.supportRed, "supportRed");
            }
        };
        console.log("works")

        replaceImages();
    }, []);

    const make = (champion, role) => {
        let src = "http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/" + champion + ".png";
        let element = React.createElement("div", {
                className: "pick-container",
                id: role
            },
            [
                React.createElement("img", {src: src, alt: role}),
                React.createElement("p", {}, champion)
            ]
        );
        console.log("pls work")
        console.log(champion)
        console.log(role)

        console.log(element)
        return element;
    };

    return (
        <Fragment>
            {/*<h3 className="poll-title">{formatTitle(poll.topBlue, poll.jungleBlue, poll.midBlue,*/}
            {/*    poll.botBlue, poll.supportBlue, poll.topRed, poll.jungleRed, poll.midRed, poll.botRed, poll.supportRed)}</h3>*/}
            <h3 className="poll-title">Which team composition is better?
            </h3>

            <br/>
            <hr/>
            <br/>

            <div className="buttons_center">{answers}</div>
            <div className="buttons_center">
                <button className="button" onClick={() => setShowGraph(true)}>Show graph without voting</button>
            </div>

            <br/>
            <hr/>
            <br/>

            <Container>
                <Row>
                    <Col sm={6}>
                        <div className="blue-side">
                            {poll.topBlue && make(poll.topBlue, "topBlue")}
                            {poll.jungleBlue && make(poll.jungleBlue, "jungleBlue")}
                            {poll.midBlue && make(poll.midBlue, "midBlue")}
                            {poll.botBlue && make(poll.botBlue, "botBlue")}
                            {poll.supportBlue && make(poll.supportBlue, "supportBlue")}
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="red-side">
                            {poll.topRed && make(poll.topRed, "topRed")}
                            {poll.jungleRed && make(poll.jungleRed, "jungleRed")}
                            {poll.midRed && make(poll.midRed, "midRed")}
                            {poll.botRed && make(poll.botRed, "botRed")}
                            {poll.supportRed && make(poll.supportRed, "supportRed")}
                        </div>
                    </Col>
                </Row>
            </Container>
            <br/>
            <hr/>
            {poll.options && (showGraph || hasVoted()) && <Pie data={data}/>}
            <br/>
        </Fragment>
    )

}


export default connect(store => ({
        poll: store.currentPoll,
        auth: store.auth
    }), {vote}
)(Poll);