//Write a function called createStore that takes in a reducer function as an argument.
//The createStore function should return an object with two methods - getState, dispatch.
export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action)
    render();
  }

  function getState() {
    return state;
  }

  dispatch({ type: '@@INIT' });

  return {
    dispatch,
    getState
  };
}

function render() {
  const container = document.getElementById('container');
}