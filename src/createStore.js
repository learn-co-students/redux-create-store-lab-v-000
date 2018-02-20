export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  dispatch({type: '@@INIT'});
  
  return {
    dispatch,
    getState
  };
}

function render() {
  const container = document.getElementById('container');
}

// function candyReducer(state = [], action) {
//   switch (action.type) {
//     case 'ADD_CANDY':
//       return [...state, action.candy];
//     default:
//       return state;
//   }
// }
//
// let candyStore = createStore(candyReducer);
// candyStore.dispatch({type: '@@INIT'});
//
// function countReducer(state = 0, action) {
//   switch (action.type) {
//     case 'INCREMENT_COUNT':
//       return state + 1;
//     case 'DECREMENT_COUNT':
//       return state - 1;
//     default:
//       return state;
//   }
// }
//
// let countStore = createStore(countReducer);
// countStore.dispatch({type: '@@INIT'});
