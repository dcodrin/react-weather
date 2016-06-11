import React from 'react';

export default ({city, temperature, cod}) => {
    var displayMessage = '';

    if (cod === 200) {
        displayMessage = (<h3 className="text-center">The temperature in {city} is {temperature} C&deg;.</h3>);
    } else if (cod === '404') {
        displayMessage = (<h3 className="text-center">City not found!</h3>);
    }

    return (
        <div>
            {displayMessage}
        </div>
    );
};
