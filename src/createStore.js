import candyReducer from './reducers/candyReducer';
import countReducer from './reducers/countReducer';

export default function createStore(reducer) {
  let state;

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  dispatch({ type: '@@INIT' });

  return { dispatch, getState };
}

function render() {
  const main = document.getElementById('main');
}
