export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer;
    render();
  }

  function getState() {
    return state;
  }

  return { dispatch, getState };

};

let store = createStore();
store.dispatch({ type: '@@INIT' });

function render() {
  const container = document.getElementById('container');
}
