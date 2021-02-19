import React from 'react';
import {withRouter} from 'react-router-dom';
import Poll from "../components/Poll";
import ErrorMessage from "../components/ErrorMessage";
import Auth from "../components/Auth";
import CreatePoll from "../components/CreatePoll";
import Polls from "../components/Polls";
import Champions from "../components/Champions";

const TestPage = props => {

    return (
        <div>
            <div>
                <h2>Testing Error Component:</h2>
                <ErrorMessage/>
                <hr/>

                <h2>Auth Component:</h2>
                <Auth/>
                <hr/>

                <h2>Create Poll Component</h2>
                <CreatePoll/>
                <hr/>

                <h2>Polls Comp</h2>
                <Polls {...props}/>
                <hr/>

                <h2>Poll Comp</h2>
                <Poll/>
                <hr/>

                <h2>Champions Comp</h2>
                <Champions/>
                <hr/>
            </div>
        </div>
    )
};

export default withRouter(TestPage);