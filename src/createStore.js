export default function createStore(reducer) {
  // add your code here
  let state;

  function getState() {
    return state;
  }

  dispatch( {type: '@@INIT'})

  function dispatch(action) {
    state = reducer(state, action)
    render();
  }

  return {
    getState,
    dispatch
  }
}

function render() {
  const container = document.getElementById('container');
}
