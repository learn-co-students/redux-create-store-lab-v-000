export default function createStore(reducer) {
  // add your code here
  let state;


  function dispatch(action) {
    state = reducer(state, action)
    render()
  }
 //createStore getState returns the default state based on the reducer for the candyStore
  function getState() {
    return state;
  }

  dispatch({ type: '@@INIT' })

  return {
    dispatch,
    getState
  }









}

function render() {
  const container = document.getElementById('container');
}

// const store = createStore(reducer, 1);
