export default function createStore(reducer) {
  // add your code here
  let state;

   function dispatch(action) {
    state = reducer(state, action);
    render();
  }

   function getState() {
    return state;
  }

   dispatch({ type: '@@INIT' })  //remember to set initial state so it's not undefined

   return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
