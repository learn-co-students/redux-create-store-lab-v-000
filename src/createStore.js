// import {candyReducer} from './reducers/candyReducer.js'
// import {countReducer} from './reducers/countReducer.js'

export default function createStore(reducer) {
  let state

  function dispatch(action) {
    state = reducer(state, action)
  }

  function getState() {
    return state
  }

  function init() {
    dispatch({type: 'INIT'})
  }

  init()
  return {dispatch, getState}
}

function render() {
  const container = document.getElementById('container');
}

// let candyStore = createStore(candyReducer.candyReducer)
//
// let countStore = createStore(countReducer.countReducer)
//
// candyStore.dispatch({type: '@@INIT'})
// countStore.dispatch({type: '@@INIT'})
