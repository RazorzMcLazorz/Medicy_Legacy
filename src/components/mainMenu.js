import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import { Link } from 'react-router-dom'

class MainMenu extends Component {
  render() {
    return (
      <div className='mainMenu'>
        <img src='./assets/mainMenuBackGround.jpg' style={{ width: '100vw', height: '100vh', position: 'fixed' ,zIndex: -1}}/>
        <div className='body'>
          <h1>
            Medicy
          </h1>
          <div className='buttonRow'>
            {this.props.user ?
            <div>
              <div className='button'>
                New
              </div>
              <div className='button'>
                Load
              </div>
            </div> :
            <a className='button' href='/login'>
              Login
            </a> 
            }
          </div>
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