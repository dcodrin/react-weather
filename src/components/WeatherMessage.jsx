import React from 'react';

class ErrorModal extends React.Component {

    componentDidMount() {
        //create new modal instance
        const modal = new Foundation.Reveal($('#errorModal'));
        modal.open();
    }


    render() {
        return (
            <div className="reveal text-center" id="errorModal" data-reveal="">
                <h4 className="text-center">City not found!</h4>
                <button className="button hollow" data-close="">&times;</button>
            </div>
        );
    }
}

export default ({city, temperature, cod}) => {
    var displayMessage = '';

    if (cod === 200) {
        displayMessage = (<h4 className="text-center">The temperature in {city} is {temperature} C&deg;.</h4>);
    } else if (cod === '404') {
        displayMessage = (<ErrorModal />);
    }

    return (
        <div>
            {displayMessage}
        </div>
    );
};
