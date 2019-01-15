

export default function createStore(reducer) {
  // add your code here
  //define dispatch, define getState, define state execute reducer, return dipatch and getState
  let state;

  function dispatch(action){
    state = reducer(state, action);
    render();
  }

  function getState(){
    return state;
  };

  dispatch({type: '@@INIT'})
  
  return {dispatch, getState};
}

function render() {
  const container = document.getElementById('container');
}



