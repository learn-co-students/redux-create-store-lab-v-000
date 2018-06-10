export default function createStore(reducer) {
  // add your code here
  let state;

  const dispatch = (action) => {
    state = reducer(state ,action);
    render();
  }

  dispatch({ type: '@@INIT'})

  const getState = () => {
    return state;
  }

  return {
    getState,
    dispatch
  }

}

function render() {
  const container = document.getElementById('container');
}
