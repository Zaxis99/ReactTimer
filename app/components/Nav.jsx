import React from 'react';

import {NavLink} from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer App</li>
                        <li><NavLink exact to="/" activeClassName="active-link">Timer</NavLink></li>
                        <li><NavLink to="/countdown" activeClassName="active-link">Countdown</NavLink></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">Created by Zack Harvey</li>
                    </ul>
                </div>
            </div>
        );
    }
}

module.exports = Nav;