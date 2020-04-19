import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Background from '../components/backgroundImage'
import { getCookie } from '../functions/cookieHelper'

class MainMenu extends Component {

  componentDidMount() {
    fetch(`${this.props.link}/`)
    .then(res => this.props.changeState({user: getCookie('username'), db: res.ok}))
    .catch(res => console.log(res))
  }

  render() {
    return (
      <div className='mainMenu'>
        <Background/>
        <div className='body'>
          <h1>
            Medicy
          </h1>
          {this.props.db ?
            <div className='buttonRow'>
              {this.props.user ?
              <div>
                <a className='button' href="/create">
                  New
                </a>
                <a className='button'>
                  Load
                </a>
              </div> :
              <a className='button' href='/login'>
                Login
              </a> }
            </div>:
            <div className='buttonRow'>
              Loading for Database to boot up please wait a minute! =)
            </div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
MainMenu = connect(mapStateToProps, actions)(MainMenu)
export default MainMenu