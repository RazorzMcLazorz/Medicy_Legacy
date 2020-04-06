import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  Login(username, password) {
    this.setState({username: username, password: password})
  }

  Signup(username, password) {
    this.setState({username: username, password: password})
  }

  render() {
    return (
      <div className='login'>
        <img src='./assets/mainMenuBackGround.jpg' style={{ width: '100vw', height: '100vh', position: 'fixed' ,zIndex: -1}}/>
        <div className='body'>
          <div className='loginComponent'>
            <div>
              Enter your login credentials even if you havent created an account before.
            </div>
            <br/>
            <label htmlFor='username'>Username:</label>
            <input type='type' id='username' name='username'/>
            <br/>
            <label htmlFor='username'>Password:</label>
            <input type='password' id='password' name='password'/>
            <br/>
            <a className='button' onClick={() => this.Login(document.getElementById("username").value, document.getElementById("password").value)} href='/'>
              Login
            </a>
            <a className='button' onClick={() => this.Login(document.getElementById("username").value, document.getElementById("password").value)} href='/'>
              Signup
            </a>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
Login = connect(mapStateToProps, actions)(Login)
export default Login