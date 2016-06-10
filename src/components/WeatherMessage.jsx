import React from 'react';

export default ({city, temperature, cod}) => {
    var displayMessage = '';

    if (cod === 200) {
        displayMessage = (<h1>The temperature in {city} is {temperature} C&deg;.</h1>);
    } else if (cod === '404') {
        displayMessage = (<h1>City not found!</h1>);
    }

    return (
        <div>
            {displayMessage}
        </div>
    );
};
