var React = require('react');
var ReactDOM = require('react-dom');
import {BrowserRouter as Router, Route, HashRouter, Link} from 'react-router-dom' ;

// Our Components
var Main = require('Main');

// Load Foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'); 
require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css'); // <--- new line

// App CSS
require('style-loader!css-loader!sass-loader!applicationStyles');

$(document).foundation();

ReactDOM.render(
    <Router>
       <Main />
    </Router>,
    document.getElementById("app")
);