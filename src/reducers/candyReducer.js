import createStore from '../createStore.js';

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy]
    default:
      return state
  }
}

let store = createStore(candyReducer)
store.dispatch({ type: '@@INIT' })

export default candyReducer
