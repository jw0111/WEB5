import React, { Component } from 'react';

class login extends Component {
  state = {
    id: '',
    password: ''
  }
  appChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  appClick = () => {
    // 로그인 함수
  }
  appKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.appClick();
    }
  }
  render() {
    const { id, password } = this.state;
    const { appChange, appClick, appKeyPress } = this;
    return (
      <div>
        <h2>로그인</h2>
        <header>
          <div>
          <input type="text" name="id" placeholder="아이디" value={id} onChange={appChange} />
          </div>
          <div>
          <input type="password"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={appChange}
            onKeyPress={appKeyPress}
          />
          </div>
          <button onClick={appClick}>로그인</button>
        </header>
      </div>
    );
  }
}

export default login;