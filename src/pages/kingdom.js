import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Background from '../components/backgroundImage'

class Kingdom extends Component {

  state = {
    mapSize : {
      'small' : 10
    }
  }

  createArray(num) {
    let arr = new Array
    for (let i = 0; i < num; i++) {
      arr.push(i)
    }
    let arr2 = new Array
    for (let i = 0; i < 4; i++) {
      arr2[i] = new Array(4)
      for (let j = 0; j < 4; j++) {
        arr2[i][j] = '[' + i + ', ' + j + ']'
      }
    }
    console.log(Object.values(arr2))
    return arr
  }

  MapLoader(size) {
    let arr = this.createArray(size)

    return (
      <div>
        {
          arr.map( row => 
            <div style={{ display: 'flex' }}>
              {
                arr.map(col => 
                <div style={{ backgroundColor: '#FF5733', minWidth: 30, height: 30, fontSize: 8}}>
                  {row}{col}
                </div>  
                )
              }
            </div>
          )
        }
      </div>
    )
  }

  render() {
    console.log(this.props)
    return (
      <div className='kingdom'>
        <Background/>
        <div className='body'>
          {this.MapLoader(this.state.mapSize['small'])}
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