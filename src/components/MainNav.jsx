import React from 'react';
import {Link, IndexLink} from 'react-router';

class MainNav extends React.Component {

    constructor() {
        super();

        this.state = {
            city: ''
        };
        this.onSearch = this.onSearch.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            city: e.target.value
        });
    }

    onSearch(e) {
        e.preventDefault();
        const encodedLocation = encodeURIComponent(this.state.city);
        if(encodedLocation.length > 0){
            //reroute to homepage with new query
            //note: the new query is a new prop to Weather.jsx
            window.location.hash = `#/?location=${encodedLocation}`;
            this.setState({city: ''});
        }
    }

    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>

                        </li>
                        <li>
                            <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                    </ul>
                </div>
                <div className="tob-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input onChange={this.handleChange} value={this.state.city} type="search" placeholder="City name"/></li>
                            <li><input type="submit" className="button" value="Get Weather"/></li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}

export default MainNav;
