// Here state is a number, previously I've thought of state only as an object

function countReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + 1;
    case 'DECREMENT_COUNT':
      return state - 1;
    default:
      return state;
  }
}

export default countReducer;
