import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/create'>
                <Create />
              </Route>
              <Route path='/blog/:id'>
                <BlogDetails />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
