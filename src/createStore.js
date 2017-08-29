import countReducer from './reducers/countReducer.js';
import candyReducer from './reducers/candyReducer.js';

export default function createStore(reducer) {

  let state;

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  dispatch({type: '@@INIT'});

  return {
    getState,
    dispatch
  };

};

function render() {
  console.log('whoo');
}

// createStore(countReducer).dispatch({ type: '@@INIT' });
// createStore(candyReducer).dispatch({ type: '@@INIT' });
