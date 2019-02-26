import candyReducer from './reducers/candyReducer'
import countReducer from './reducers/countReducer'

export default function createStore(reducer) {
  let state;
  
  function dispatch(action) {
    state = reducer(state, action)
    render()
  }

  function getState() {
    return state;
  }

  dispatch({ type: '@@INIT' })
  
  return {
    dispatch,
    getState
  }
}

function render() {
  if (typeof window !== 'undefined') {
    let container = document.getElementById('container');
    container.textContent = store.getState()
  }
}