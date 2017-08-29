export default function createStore(reducer) {
  // add your code here  let state;

  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState(reducer) {
    return state;
  }

    dispatch({ type: '@@INIT' })

  return {
    dispatch,
    getState
  };

}

function render() {
  const container = document.getElementById('container');
}
