import React from 'react'

import Whale from './Whale'

const STYLE = {
  backgroundColor: '#384d54',
  height: 600,
  width: 800
}

const WHALES = [
  {
    height: 150,
    position: {x: 200, y: 200},
    velocity: {x: -5, y: 10},
    width: 230
  },
  {
    height: 150,
    position: {x: 550, y: 200},
    velocity: {x: 5, y: -10},
    width: 230
  },
  {
    height: 150,
    position: {x: 400, y: 450},
    velocity: {x: 10, y: 5},
    width: 230
  }
]

const App = props => {
  return (
    <div className='disable-text-select' style={STYLE}>
      {WHALES.map((whale, index) => <Whale key={index} whale={whale} />)}
    </div>
  )
}

export default App
