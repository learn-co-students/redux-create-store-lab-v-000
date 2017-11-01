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
  // add your code here
}

function render() {
  const container = document.getElementById('container');
}

// let candyStore = createStore(candyReducer);
// candyStore.dispatch({ type: '@@INIT' });
//
// let countStore = createStore(countReducer);
// countStore.dispatch({ type: '@@INIT' });
