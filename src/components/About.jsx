import React from 'react';

export default () => {
    return (
        <div>
            <h1 className="text-center page-title">About this app</h1>
            <p>A react based weather app.</p>
            <p>Links to the tools used for this app.</p>
            <ul>
                <li><a href="https://github.com/facebook/react">React</a></li>
                <li><a href="https://github.com/reactjs/react-router">React-Router</a></li>
                <li><a href="https://github.com/mzabriskie/axios">Axios</a></li>
                <li><a href="http://openweathermap.org/">Open Weather Map</a></li>
                <li><a href="http://foundation.zurb.com/">Foundation</a></li>
            </ul>
        </div>
    );
};
