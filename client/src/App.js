import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Fibonacci calculator</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </header>
          <div>
            <Route exact path="/" component={Fib} />
            <Route exact path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
