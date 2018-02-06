export default function createStore(reducer) {
  let state;

  function dispatch(action = {type: '@@INIT'}){
    state = reducer(state, action)
    render()
  }
  function getState() {
    return state;
  }

  dispatch()

  return {
    dispatch,
    getState
  };
}

function render() {
  const container = document.getElementById('container');
}
