import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Background from '../components/backgroundImage'

const terraimMap = {
  0: './assets/plainsv1.png',
  1: './assets/ironv1.png',
  2: './assets/mountainsv1.png',
  3: './assets/coalv1.png',
  4: './assets/hillsv1.png',
  5: './assets/marshv1.png',
  6: './assets/stonev1.png',
  7: './assets/treesv1.png',
  8: './assets/wheatv1.png',
}

class Kingdom extends Component {

  state = {
    data: {},
    lastClicked: '',
    mapSize : {
      'small' : 15
    }
  }

  tiletyper() {
    const ran = Math.round(Math.random() * 25)
    if (ran >= 9) {
      return 0
    }
    else {
      return ran
    }
  }

  createArray(num) {
    let arr = new Array
    for (let i = 0; i < num; i++) {
      arr.push(i)
    }
    return arr
  }

  tile(id) {
    const tile = this.state.data[id]
    return tile && (
      <div
        key={id}
        onClick={() => this.setState({ lastClicked: id })} 
        className={`${this.state.lastClicked === id && 'tileSelected'} tile`}
      >
        <div 
          className='insideTile'
          style={{ backgroundImage: `url(${terraimMap[tile.terrain]})` }}
        >
          {this.state.lastClicked === id && 'X'}
        </div>
      </div>
    )
  }

  MapLoader(size) {
    let arr = this.createArray(size)

    return (
      <div className='layout'>
        {
          arr.map( row => 
            <div key={row} className='layoutRow'>
              {
                arr.map(col => 
                  this.tile(`${row}-${col}`)
                )
              }
            </div>
          )
        }
      </div>
    )
  }

  componentDidMount() {
    let arr = new Array
    for (let i = 0; i < this.state.mapSize['small']; i++) {
      arr.push(i)
    }
    let arr2 = {
      '-' : {
        terrain: 0,
        unit: 0,
        building: 0
      }
    }
    console.log(arr2)
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        arr2[`${i}-${j}`] = {
          terrain: this.tiletyper(),
          unit: 0,
          building: 0
        }
      }
    }
    this.setState({ data: arr2})
    console.log(arr2)
  }

  render() {
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