const candyReducerDefaultState = []

function candyReducer(state = candyReducerDefaultState, action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

// let candyStore = createStore(candyReducer);
// dispatch({type: '@@INIT'})
let candyStore = createStore(candyReducer);
candyStore.dispatch('initialize')

export default candyReducer;
