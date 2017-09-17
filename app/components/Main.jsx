import React from 'react';

import { Route } from 'react-router-dom';
import { withRouter } from 'react-router'

import Countdown from 'Countdown';
import Nav from 'Nav';
import Timer from 'Timer';

var Main = (props) => {
    return (
        <div>
            <Nav />
            <Route exact path="/" component={Timer}/>
            <Route path="/countdown" component={Countdown}/>
        </div>
    );
}

module.exports = Main;