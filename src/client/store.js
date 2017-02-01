import { createStore } from 'redux'

import { update } from './actions'
import reducer from './reducers'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

let interval = null

store.subscribe(() => {
  const state = store.getState()
  if (!interval && state.whales.length > 0) {
    interval = window.setInterval(() => {
      store.dispatch(update(0.01))
    }, 10)
  } else if (interval && state.whales.length === 0) {
    window.clearInterval(interval)
  }
})

export default store
