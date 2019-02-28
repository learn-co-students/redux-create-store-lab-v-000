import countReducer from './reducers/countReducer.js';
import candyReducer from './reducers/candyReducer.js';

export default function createStore(reducer) {


    let state;

    function dispatch(action) {
      state = reducer(state, action);
      render();
    }

    function getState() {
      return state;
    };

    dispatch({ type: '@@INIT' });

    return {
      dispatch,
      getState
    };
  };


function render() {
//  const container = document.getElementById('container');
}

//let store = createStore(countReducer)

//let button = document.getElementById('button');
