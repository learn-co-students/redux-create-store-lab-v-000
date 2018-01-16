export default function createStore(reducer) {
  // add your code here
  // should return object with two methods - 'getState' and 'dispatch'
  // getState should return current state
  // dispatch should take in aciton, update state using reducer, call render function
  let state;

  function dispatch(action) {
    state = reducer(state, action);
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
