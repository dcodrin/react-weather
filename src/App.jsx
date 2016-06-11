import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import MainNav from 'MainNav';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

// Load foundation
//use css! loader to load css
//use style! loader to inject css into html
import 'style!css!foundation-sites/dist/foundation.min.css';

//Launch foundation
$(document).foundation();

const App = (props) => {
    return (
        <div>
            <MainNav />
            {props.children}
        </div>
    );
};

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Weather} />
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples} />
        </Route>
    </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
