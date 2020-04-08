import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Background from '../components/backgroundImage'

class CreateGame extends Component {

  render() {
    console.log(this.props)
    return (
      <div className='createGame'>
        <Background/>
        <div className='body'>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
CreateGame = connect(mapStateToProps, actions)(CreateGame)
export default CreateGame