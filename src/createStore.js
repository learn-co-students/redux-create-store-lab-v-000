export default function createStore(reducer) {
  // add your code here
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState(reducer) {
    return state;
  };

  return {
    dispatch,
    getState
  };
};

function render(state = { state: [] }, action) {
  const container = document.getElementById('container');
}
