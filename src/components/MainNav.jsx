import React from 'react';
import {Link, IndexLink} from 'react-router';

export default () => {
    return (
        <div>
            <h1>Here Be Thy Navigation</h1>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>The About</Link>
            <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
        </div>
    );
};