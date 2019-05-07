export default function createStore(reducer) {
  // add our state var here so it can be accessed by dispatch()
  let state;

  // we need to persist the change reducer makes to state
  // remember, the reducer needs to include an action, as we can see in /reducers
  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  // we'll populate the initial state tree with the abbreviated ActionTypes.INIT
  dispatch({ type: '@@INIT' });

  // we return getState()
  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
