const countReducerDefaultState = 0

function countReducer(state = countReducerDefaultState, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + 1;
    case 'DECREMENT_COUNT':
      return state - 1;
    default:
      return state;
  }
}

let countStore = createStore(countReducer);
countStore.dispatch('initalize')

export default countReducer;
