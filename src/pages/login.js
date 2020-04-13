import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Background from '../components/backgroundImage'

class Login extends Component {
  state = {
    error: '',
    signedup: '',
    canUserSignUp: true
  }

  Login(username, password) {
    fetch(`${this.props.link}/users/select?name=${username}`)
    .then(res => res.json())
    .then(res => {
      res = res.data[0]
      if (res.users_password === password) {
        console.log(res)
        this.props.changeState({user: res.users_username, userperm: res.users_permissions})
        document.cookie = `username=${res.users_username}; path=/`;
        this.props.history.push('/')
      }
    })
    .catch(() => this.setState({error: 'Login information is incorrect'}))
  }

  Signup(username, password) {
    fetch(`${this.props.link}/users/add?name=${username}&pass=${password}&perm=reg`)
    .then(res => res.json())
    .then(() => this.setState({signedup: 'Now login'}))
    .catch(() => this.setState({error: 'Username is already taken please try another one'}))
  }

  componentDidMount() {
    fetch(`${this.props.link}/users`)
    .then(res => res.json())
    .then(res => {
      res = res.data
      console.log(res)
      if (res.length >= 5) {
        this.setState({ canUserSignUp: false })
        console.log(res)
      }
    })
    .catch(() => this.setState({error: 'Failed to find amount of Users'}))
  }

  render() {
    return (
      <div className='login'>
        <Background/>
        <div className='body'>
          <div className='loginComponent'>
            <div>
              Enter your login credentials even if you havent created an account before.
            </div>
            <br/>
            {
              this.state.signedup && 
              <div>
                <div>
                  {this.state.signedup}
                </div>
                <br/>
              </div>
            }
            {
              this.state.error && 
              <div>
                <div style={{ color: '#FF0000' }}>
                  {this.state.error}
                </div>
                <br/>
              </div>
            }
            <label htmlFor='username'>Username:</label>
            <input type='type' id='username' name='username' className='cgsText'/>
            <br/>
            <label htmlFor='username'>Password:</label>
            <input type='password' id='password' name='password' className='cgsText'/>
            <br/>
            <a className='button' onClick={() => this.Login(document.getElementById("username").value, document.getElementById("password").value)}>
              Login
            </a>
            { this.state.canUserSignUp &&
              <a className='button' onClick={() => this.Signup(document.getElementById("username").value, document.getElementById("password").value)}>
                Signup
              </a>
            }
            <a className='button' href='/'>
              Cancel
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