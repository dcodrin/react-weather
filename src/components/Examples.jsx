import React from 'react';
import {Link} from 'react-router';

export default () => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Example locations.</p>
            <ol>
                <li>
                    <Link to="/?location=Montreal">Montreal, CA</Link>
                </li>
                <li>
                    <Link to="/?location=Vancouver">Vancouver, CA</Link>
                </li>
            </ol>
        </div>
    );
};
