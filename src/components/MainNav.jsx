import React from 'react';
import {Link, IndexLink} from 'react-router';

class MainNav extends React.Component {

    constructor(){
        super();

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(e){
        e.preventDefault();
        alert('Not yet wired up!');
    }

    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather</li>
                        <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get
                            Weather</IndexLink></li>
                        <li><Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>The
                            About</Link></li>
                        <li><Link to="examples" activeClassName="active"
                                  activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
                    </ul>
                </div>
                <div className="tob-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input type="search" placeholder="City name"/></li>
                            <li><input type="submit" className="button" value="Get Weather"/></li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}

MainNav.propTypes = {};
MainNav.defaultProps = {};

export default MainNav;
