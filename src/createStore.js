export default function createStore(reducer) {
  /* the new method:
    encapsulates the state,
    holds dispatch
  */

  //wrapping state in a function
  let state

  //call dispatch with an action, it calls reducer and returns a new state
  //state is now accessible to dispatch
  function dispatch(action) {
    state = reducer(state, action)
    render()
  }

  //return the state
  function getState() {
    return state
  }

  dispatch({ type: '@@INIT' })

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
