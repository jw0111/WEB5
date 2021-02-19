import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import signup from './signup';
import login from './login';
import home from './home';
import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </header>
      <main>
        <Route exact path="/" component={home} />
        <Route path="/signup" component={signup} />
        <Route path="/login" component={login} />
      </main>
    </Router>
    );
  }
}

export default App;