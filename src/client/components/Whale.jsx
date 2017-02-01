import React, { PropTypes } from 'react'

const IMAGE_PATH = '/moby-dock.png'

const className = props => {
  const classes = []
  classes.push('disable-image-drag')
  if (props.whale.velocity.x > 0) {
    classes.push('flip-horizontally')
  }
  return classes.join(' ')
}

const style = props => {
  const { height, width } = props.whale
  const { x, y } = props.whale.position
  return {
    height,
    left: x - width / 2,
    position: 'absolute',
    top: y - height / 2,
    width
  }
}

const Whale = props => {
  return (
    <img className={className(props)} src={IMAGE_PATH} style={style(props)} />
  )
}

Whale.propTypes = {
  whale: PropTypes.shape({
    height: PropTypes.number.isRequired,
    position: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }).isRequired,
    velocity: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }).isRequired,
    width: PropTypes.number.isRequired
  }).isRequired
}

export default Whale
