export default function createStore(reducer) {
  let state = reducer(state, {type: "@@INIT"});

  function dispatch(action){
    state = reducer(state, action);
    render();
  }

  function getState(){
    return state;
  }

  return {getState, dispatch}
}

function render() {
  const container = document.getElementById('container');
}
