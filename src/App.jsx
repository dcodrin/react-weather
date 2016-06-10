import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
 static render() {
    return (
        <div>
            <h1>Hello Mars! We are live!</h1>
            {/*Application body*/}
        </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

ReactDOM.render(<App />, document.querySelector('#app'));
