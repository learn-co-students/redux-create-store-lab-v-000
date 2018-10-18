import candyReducer from './reducers/candyReducer'
import countReducer from './reducers/countReducer'

export default function createStore(reducer) {
  // add your code here

  let state;

  function dispatch(action) {
    state = reducer(state, action)
    render()
  }

  function getState() {
    return state
  }

  return {dispatch, getState}

}

function render() {
  const container = document.getElementById('container');
}

// let storeCount = createStore(countReducer)
// createStore(storeCount).dispatch({type: "not"})
//
// let storeCandy = createStore(candyReducer)
// createStore(storeCandy).dispatch({type: "not"})
