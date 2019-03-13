

export default function createStore(reducer) {
  let state;

  function dispatch(action = {type: '@@INIT'}){
    state = reducer(state, action);
    render();
  }

  dispatch({ type: '@@INIT' });

  function getState(){
    return state;
  }

  return { dispatch, getState }
}

function render() {
  const container = document.getElementById('container');
}
