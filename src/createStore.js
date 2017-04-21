export default function createStore(reducer) {
  // Declares the state variable
  let state;

  // Takes in an action, updates the state using the reducer,
  // calls the render function
  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    // Returns the current state
    return state;
  }

  // Dispatches an action that returns the default state
  dispatch({ type: '@@INIT' })

  // Returns an object with two methods
  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
