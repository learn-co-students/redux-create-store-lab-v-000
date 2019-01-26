import countReducer from './reducers/countReducer';
import candyReducer from './reducers/candyReducer';

export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  dispatch({ type: '@@INIT'})
  
  return { getState, dispatch }
}

function render() {
  const container = document.getElementById('container');
}


