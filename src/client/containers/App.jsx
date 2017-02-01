import React from 'react'
import { connect } from 'react-redux'

import { addWhale } from '../actions'
import Whale from '../components/Whale'

const style = props => {
  const { height, width } = props
  return {
    backgroundColor: '#384d54',
    height,
    overflow: 'hidden',
    position: 'relative',
    width
  }
}

const whales = props => {
  return props.whales.map((whale, index) => {
    return <Whale key={index} whale={whale} />
  })
}

const App = props => {
  const onClick = props.onClick
  return (
    <div className='disable-text-select' onClick={onClick} style={style(props)}>
      {whales(props)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    height: state.height,
    whales: state.whales,
    width: state.width
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: event => {
      const { clientX: x, clientY: y } = event
      dispatch(addWhale(x, y))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
