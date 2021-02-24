import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import board from './board';

class home extends Component {
  state = {
    userInput:'',
  }
  handleInput = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };
  render() {
    const { handleInput } = this;
    return (
      <Router>
        <nav>
      <div>
      <h2>스타트업MVP(최소기능제품)피드백</h2>
      <SearchBox handleChange={handleInput} />
      <div>
        <Link to="./board">
          <button>게시판</button>
        </Link>
        <button>글 올리기</button></div>
    </div>
      </nav>
      <switch>
      <Route path="/board" component={board} />
      </switch>
    </Router>
    );
};
}
class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        placeholder="제품명 또는 개발자 입력..."
        onChange={this.props.handleChange}
      />
    );
  }
}

export default home;