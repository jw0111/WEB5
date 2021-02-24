import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import signup from './signup';
import login from './login';
import home from './home';
import intro from './intro';
import board from './board';
import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
      <header>
        <Link to="/">
          <button>홈</button>
        </Link>
        <Link to="/intro">
          <button>사이트 소개</button>
        </Link>
        <Link to="./board">
          <button>게시판</button>
        </Link>
        <Link to="/signup">
          <button>회원가입</button>
        </Link>
        <Link to="/login">
          <button>로그인</button>
        </Link>
      </header>
      <main>
        <Route exact path="/" component={home} />
        <Route path="/intro" component={intro} />
        <Route path="/board" component={board} />
        <Route path="/signup" component={signup} />
        <Route path="/login" component={login} />
      </main>
    </Router>
    );
  }
}

export default App;