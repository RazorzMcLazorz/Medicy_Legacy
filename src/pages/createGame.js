import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Background from '../components/backgroundImage'

class CreateGame extends Component {

  state = {
    mapSize: 'Small',
    difficulty: 'Normal',
    timeLimit: false
  }

  cgsButton(funct, type) {
    return (
    <div className='cgsButton' onClick={funct}>
      {type}
    </div>)
  }

  mapSizeChange(type) {
    this.setState({ mapSize: type })
  }

  difficultyChange(type) {
    this.setState({ difficulty: type })
  }

  TimelimitChange(type) {
    this.setState({ timeLimit: type })
  }

  render() {
    console.log(this.props)
    return (
      <div className='createGame'>
        <Background/>
        <div className='body'>
          <div className='createTitle'>
            Create Game
          </div>
          <div className='createReason'>
            Reason
          </div>
          <div className='createOptions'>
            <div>
              <div>
                <div>Map Size: {this.state.mapSize}</div>
                <div>
                  {this.cgsButton(() => this.mapSizeChange('Small'), 'Small')}
                  {this.cgsButton(() => this.mapSizeChange('Medium'), 'Medium')}
                  {this.cgsButton(() => this.mapSizeChange('Large'), 'Large')}
                </div>
                <div>Difficulty: {this.state.difficulty}</div>
                <div>
                  {this.cgsButton(() => this.difficultyChange('Easy'), 'Easy')}
                  {this.cgsButton(() => this.difficultyChange('Normal'), 'Normal')}
                  {this.cgsButton(() => this.difficultyChange('Hard'), 'Hard')}
                </div>
                <div>Time Limit: {this.state.timeLimit ? 'Yes' : 'No'}</div>
                <div>
                  {this.cgsButton(() => this.TimelimitChange(false), 'No')}
                  {this.cgsButton(() => this.TimelimitChange(true), 'Yes')}
                </div>
              </div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
          <div className='createSave'>
            <div>
              
            </div>
          </div>
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