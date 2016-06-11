import React from 'react';

class WeatherForm extends React.Component {

    constructor() {
        super();

        this.state = {
            city: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({city: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.city.length > 0) {
            this.props.onCitySelect(this.state.city);
            this.setState({city: ''});
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.city} onChange={this.handleChange} type="search" placeholder="City name"/>
                    <button className="expanded button" type="submit">Get Weather</button>
                </form>
            </div>
        );
    }
}

WeatherForm.propTypes = {};
WeatherForm.defaultProps = {};

export default WeatherForm;
