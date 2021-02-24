import React, { Component } from 'react';

class signup extends Component {
  state = {
    id: '',
    password: '',
    password_2: '',
    nickname: '',
    birth: '',
    email:''
  }
  appChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  appClick = () => {
    if(this.state.password !== this.state.password_2){
        alert("비밀번호를 다시 확인해주세요");
    }
  }
  appKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.appClick();
    }
  }
  render() {
    const current = new Date().toISOString().split("T")[0]
    const { id, password, password_2, nickname, birth, email } = this.state;
    const { appChange, appClick, appKeyPress } = this;
    
    return (
      <div>
          <h2>회원가입</h2>
        <header>
            <div>
          아이디
          <input type="text" name="id" placeholder="아이디" value={id} onChange={appChange} />
          <button>중복확인</button>
          </div>
          <div>
          비밀번호
          <input type="password"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={appChange}
            onKeyPress={appKeyPress}
          />
          </div>
          <div>
          비밀번호 확인
          <input type="password"
            name="password_2"
            placeholder="비밀번호 확인"
            value={password_2}
            onChange={appChange}
            onKeyPress={appKeyPress}
          />
          </div>         
          <div>
          닉네임
          <input type="text" name="nickname" placeholder="닉네임" value={nickname} onChange={appChange} />
          <button>중복확인</button>
          </div>
          생년월일
          <input type='date'
            placeholder="생년월일"  value={birth} onChange={appChange} name='birth' max={current}/>
          <div>
            이메일
          <input type="text" name="email" placeholder="이메일" value={email} onChange={appChange} />
          </div>
          <button onClick={appClick}>회원가입</button>
        </header>
      </div>
    );
  }
}

export default signup;