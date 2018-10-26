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

//this reducer adds/subtracts the number of candies based on the action type
