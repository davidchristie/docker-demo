const initialVelocity = () => {
  const speed = 5 + 5 * Math.random()
  const direction = 2 * Math.PI * Math.random()
  return {
    x: speed * Math.sin(direction),
    y: speed * Math.cos(direction)
  }
}

export const addWhale = (x, y) => {
  return {
    type: 'ADD_WHALE',
    whale: {
      height: 150,
      position: {x, y},
      velocity: initialVelocity(),
      width: 230
    }
  }
}

export const update = seconds => {
  return {
    seconds,
    type: 'UPDATE'
  }
}
