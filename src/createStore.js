export default function createStore(reducer) {
  let state;
  
  function dispatch(action) {
    state = reducer(state, action);
    render();
  }
  
  function getState() {
    dispatch({ type: '@@INIT' });
    return state;
  }

  return { getState, dispatch }
}

function render() {
  const container = document.getElementById('container');
}
