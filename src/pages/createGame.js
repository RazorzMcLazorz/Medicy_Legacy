import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Background from '../components/backgroundImage'

class CreateGame extends Component {

  state = {
    mapSize: 'Small',
    difficulty: 'Normal',
    timeLimit: 'Yes'
  }

  cgsButton(funct, type, state) {
    return (
    <div className={state === type ? 'cgsButtonSelected' : 'cgsButton'} onClick={funct}>
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

  CreateGame() {
    this.props.changeState({
      difficulty: this.state.difficulty,
      mapSize: this.state.mapSize,
      timeLimit: this.state.timeLimit
    })
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
                  {this.cgsButton(() => this.mapSizeChange('Small'), 'Small', this.state.mapSize)}
                  {this.cgsButton(() => this.mapSizeChange('Medium'), 'Medium', this.state.mapSize)}
                  {this.cgsButton(() => this.mapSizeChange('Large'), 'Large', this.state.mapSize)}
                </div>
                <div>Difficulty: {this.state.difficulty}</div>
                <div>
                  {this.cgsButton(() => this.difficultyChange('Easy'), 'Easy', this.state.difficulty)}
                  {this.cgsButton(() => this.difficultyChange('Normal'), 'Normal', this.state.difficulty)}
                  {this.cgsButton(() => this.difficultyChange('Hard'), 'Hard', this.state.difficulty)}
                </div>
                <div>Time Limit: {this.state.timeLimit}</div>
                <div>
                  {this.cgsButton(() => this.TimelimitChange('No'), 'No', this.state.timeLimit)}
                  {this.cgsButton(() => this.TimelimitChange('Yes'), 'Yes', this.state.timeLimit)}
                </div>
              </div>
            </div>
          </div>
          <div className='createSave'>
            <a href='/' className='button'>
              Cancel
            </a>
            <a href='/kingdom' className='button' onClick={() => this.CreateGame()}>
              Create
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
CreateGame = connect(mapStateToProps, actions)(CreateGame)
export default CreateGame