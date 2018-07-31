
let store, button;
export default function createStore(reducer) {
  let state;


  function getState() {
    return state
  }

  function dispatch(action){
    state = reducer(state, action)
    if (store) render()

  }

  dispatch({type: "@@INIT"})
  return {
    dispatch,
    getState}


}

function render() {
  const container = document.getElementById('container');
  container.textContent = store.getState();
}
