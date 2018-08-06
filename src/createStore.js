export default function createStore(reducer) {
  // add your code here
  let state;

  function dispatch(action) {
    state = reducer(state, action)
    render();
  }

  const getState = () => state

  dispatch({ type: "@@INIT" })

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
