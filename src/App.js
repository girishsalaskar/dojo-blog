import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
