// Here state is an array, previously I've thought of state only as an object

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

export default candyReducer;
