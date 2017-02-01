const INITIAL_STATE = {
  height: 600,
  whales: [],
  width: 800
}

const updatePosition = (position, velocity, seconds) => {
  return {
    x: position.x + seconds * velocity.x,
    y: position.y + seconds * velocity.y
  }
}

const updateWhale = (whale, width, height, seconds) => {
  const position = updatePosition(whale.position, whale.velocity, seconds)
  return {
    ...whale,
    position
  }
}

const updateState = (state, seconds) => {
  return {
    ...state,
    whales: state.whales
      .map(whale => {
        return updateWhale(whale, state.width, state.height, seconds)
      })
      .filter(whale => {
        const { height, width } = whale
        const { x, y } = whale.position
        const top = y - height / 2
        const bottom = y + height / 2
        const left = x - width / 2
        const right = x + width / 2
        return bottom > 0 && top < state.height &&
          right > 0 && left < state.width
      })
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_WHALE':
      return {
        ...state,
        whales: [...state.whales, action.whale]
      }
    case 'UPDATE':
      return updateState(state, action.seconds)
    default:
      return state
  }
}
