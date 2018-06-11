export default function createStore(reducer) {
  let state;
 
  function dispatch(action) {
    state = reducer(state, action);
    render();
  }
 
  function getState() {
    return state;
  };
 
  dispatch({ type: '@@INIT' });
 
  return {
    dispatch, 
    getState
  };
}

function render() {
  const container = document.getElementById('container');
}

// In createStore.js, write a function called createStore that takes in a reducer function as an argument. We've provided the reducer functions for you so you can get a sense of how they'll work.
// The createStore function should return an object with two methods - getState, dispatch.
// getState should return the current state.
// dispatch should take in an action, update the state using the reducer, and call the render function.
// Note: Don't forget, your initial state for each store should be set by the reducer. You'll have to dispatch some sort of 'initialize' action to get your state set!

