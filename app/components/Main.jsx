import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router'

import Nav from 'Nav';

var Main = (props) => {
    return (
        <div>
            <Nav />
        </div>
    );
}

module.exports = Main;