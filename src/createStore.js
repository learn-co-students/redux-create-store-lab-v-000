import candyReducer from "./reducers/candyReducer";

export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    // update state using reducer
    state = reducer(state, action);
    // call render()
    render();
  };

  function getState() { // get current state
    return state;
  };

  dispatch({ type: '@@INIT' });

  return {
    getState,
    dispatch
  };
};

function render() {
  const container = document.getElementById('container');
};
