import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import { Link } from 'react-router-dom'

class Background extends Component {

  render() {
    return (
      <img src='./assets/mainMenuBackGround.jpg' style={{ width: '100vw', height: '100vh', position: 'fixed' ,zIndex: -1}}/>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
Background = connect(mapStateToProps, actions)(Background)
export default Background