
export default function createStore(reducer) {
  // add your code here
  let state;
  function dispatch(reducer){
    state = reducer(state, action);
    render();
  }

  function getState(){
    return state
  }

  dispatch({type: '@@INIT'})

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
