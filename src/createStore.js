export default function createStore(reducer) { //passes in reducer as argument
 
  let state //sets variable to state

  function dispatch(action) { //dispatch function with action argument
    state = reducer(state, action) //sets state to reducer function return value
    render() //calls render function to get container
  }

  function getState() { //function to return state
    return state
  }

  dispatch({ type: '@@INIT' }) //sets default value at init

  return { //return for createStore function
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
