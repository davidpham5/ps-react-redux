import React, { PropTypes } from 'react';
import Header from './common/Header';
class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
};

export default App;