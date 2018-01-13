import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    } 

    render() {
        return (
            <div className="container">
                Profile page!
            </div>
        )
    }
}
