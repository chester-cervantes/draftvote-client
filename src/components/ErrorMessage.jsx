import React, {Fragment} from 'react';
import {connect} from "react-redux";


// destructure {error} instead of using props so we don't have to type props.error
const ErrorMessage = ({ error }) => (
    <div>{ error.message && <div className="error">{error.message}</div> }</div>
);


// First param takes in the store and returns object of error: store.error
// Maps the store's error to the component's prop
export default connect(store => ({error: store.error}))(ErrorMessage)