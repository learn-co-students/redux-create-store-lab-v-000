export default function createStore(reducer) {
  // add your code here
  let state;
 
  // Regular Redux flow Dispatch function that requires access to the state data
  function dispatch(action) {
    state = reducer(state, action);
    render();
  }
 
  // Make the state data available to other parts of the app
  function getState() {
    console.log('state : ', state)
    return state;
  }
  
  // Initialize an opening variation of the store upon creation
  dispatch({ type: '@@INIT' });
 
  // Return an instance of the object that has access to the Dispatch and getState functions
  return {
    dispatch,
    getState
  };
}

function render() {
  const container = document.getElementById('container');
}
