import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Background from '../components/backgroundImage'

class Kingdom extends Component {

  render() {
    console.log(this.props)
    return (
      <div className='kingdom'>
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
Kingdom = connect(mapStateToProps, actions)(Kingdom)
export default Kingdom